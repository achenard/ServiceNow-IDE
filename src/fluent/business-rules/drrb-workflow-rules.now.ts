import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { handleStateTransition } from '../../server/drrb-workflow.js';

// Business Rule: DRRB State Transition Handler
export const drrb_state_transition = BusinessRule({
  $id: Now.ID['drrb_state_transition'],
  name: 'DRRB State Transition Handler',
  table: 'x_snc_hrc_change_2_drrb',
  when: 'after',
  action: ['insert', 'update'],
  order: 100,
  active: true,
  script: handleStateTransition,
  description: 'Handles DRRB state transitions and routing through approval workflow'
});

// Business Rule: DRRB Priority Calculator
export const drrb_priority_calculator = BusinessRule({
  $id: Now.ID['drrb_priority_calculator'],
  name: 'DRRB Priority Calculator',
  table: 'x_snc_hrc_change_2_drrb',
  when: 'before',
  action: ['insert', 'update'],
  order: 50,
  active: true,
  script: `
    // Calculate priority on new records or when description/directorate changes
    if (!previous || 
        current.description.toString() !== previous.description.toString() ||
        current.directorate.toString() !== previous.directorate.toString()) {
      
      var priority = 4; // Default priority
      
      // High priority criteria
      if (current.directorate == 'emod') {
        priority -= 1; // EMoD requests get higher priority
      }
      
      var description = current.description.toString().toLowerCase();
      if (description.indexOf('security') >= 0 || description.indexOf('critical') >= 0) {
        priority -= 2; // Security/critical requests get highest priority
      }
      
      if (description.indexOf('urgent') >= 0 || description.indexOf('emergency') >= 0) {
        priority -= 1; // Urgent requests get higher priority
      }
      
      // Ensure priority stays within bounds (1-5)
      current.priority = Math.max(1, Math.min(5, priority));
    }
  `,
  description: 'Automatically calculates DRRB priority based on request criteria'
});

// Business Rule: DRRB Auto-Assign Submitter
export const drrb_auto_assign_submitter = BusinessRule({
  $id: Now.ID['drrb_auto_assign_submitter'],
  name: 'DRRB Auto-Assign Submitter',
  table: 'x_snc_hrc_change_2_drrb',
  when: 'before',
  action: ['insert'],
  order: 10,
  active: true,
  script: `
    if (!current.submitter) {
      current.submitter = gs.getUserID();
    }
    
    if (!current.opened_by) {
      current.opened_by = gs.getUserID();
    }
    
    // Set initial state if not specified
    if (!current.state) {
      current.state = 'pre_approval';
    }
  `,
  description: 'Auto-assigns submitter and opened_by fields for new DRRB records'
});

// Business Rule: DRRB Submit for Approval
export const drrb_submit_for_approval = BusinessRule({
  $id: Now.ID['drrb_submit_for_approval'],
  name: 'DRRB Submit for Approval',
  table: 'x_snc_hrc_change_2_drrb',
  when: 'after',
  action: ['update'],
  condition: "current.state == 'pending' && previous.state == 'pre_approval'",
  order: 200,
  active: true,
  script: `
    gs.addInfoMessage('DRRB request ' + current.number + ' has been submitted for approval');
    
    // Log the submission
    gs.info('DRRB ' + current.number + ' submitted by ' + current.submitter.getDisplayValue());
  `,
  description: 'Handles submission of DRRB request from pre-approval to pending state'
});

// Business Rule: DRRB Validation
export const drrb_validation = BusinessRule({
  $id: Now.ID['drrb_validation'],
  name: 'DRRB Validation',
  table: 'x_snc_hrc_change_2_drrb',
  when: 'before',
  action: ['insert', 'update'],
  order: 5,
  active: true,
  script: `
    // Validate required fields for submission
    if (current.state == 'pending' || current.state != 'pre_approval') {
      if (!current.short_description || current.short_description.length < 10) {
        gs.addErrorMessage('Title must be at least 10 characters long');
        current.setAbortAction(true);
        return;
      }
      
      if (!current.description || current.description.length < 20) {
        gs.addErrorMessage('Request description must be at least 20 characters long');
        current.setAbortAction(true);
        return;
      }
      
      if (!current.directorate) {
        gs.addErrorMessage('Directorate must be specified');
        current.setAbortAction(true);
        return;
      }
    }
    
    // Prevent unauthorized state changes
    if (previous && previous.state) {
      var validTransitions = {
        'pre_approval': ['pending'],
        'pending': ['approved', 'denied', 'in_review'],
        'approved': ['vat_review'],
        'vat_review': ['it_ops_review', 'denied'],
        'it_ops_review': ['voting', 'tasked'],
        'voting': ['tasked', 'denied'],
        'tasked': ['completed'],
        'in_review': ['approved', 'denied', 'pending']
      };
      
      var previousState = previous.state.toString();
      var currentState = current.state.toString();
      
      if (validTransitions[previousState] && 
          validTransitions[previousState].indexOf(currentState) === -1 &&
          currentState !== previousState) {
        gs.addErrorMessage('Invalid state transition from ' + previousState + ' to ' + currentState);
        current.setAbortAction(true);
        return;
      }
    }
  `,
  description: 'Validates DRRB record data and enforces valid state transitions'
});