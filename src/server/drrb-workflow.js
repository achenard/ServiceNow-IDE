import { gs, GlideRecord } from '@servicenow/glide';

/**
 * Determines if a DRRB request requires voting path based on criteria
 * @param {GlideRecord} current - Current DRRB record
 * @returns {boolean} - true if voting path required, false for non-voting path
 */
export function requiresVotingPath(current) {
    // High priority requests (1-2) require voting path
    if (current.priority <= 2) {
        return true;
    }
    
    // Requests affecting pay systems require voting path
    const payRelatedSystems = ['cui_hrc', 'dcips', 'epmdtk'];
    const appSystemName = current.application_system.getDisplayValue().toLowerCase();
    if (payRelatedSystems.some(system => appSystemName.includes(system))) {
        return true;
    }
    
    // Requests with high financial impact (you could add more criteria here)
    const description = current.description.toString().toLowerCase();
    if (description.includes('financial') || description.includes('budget') || description.includes('enterprise')) {
        return true;
    }
    
    return false; // Default to non-voting path
}

/**
 * Handles DRRB state transitions and notifications
 * @param {GlideRecord} current - Current DRRB record
 * @param {GlideRecord} previous - Previous DRRB record (for updates)
 */
export function handleStateTransition(current, previous) {
    const currentState = current.state.toString();
    const previousState = previous ? previous.state.toString() : '';
    
    // Only process if state actually changed
    if (currentState === previousState) {
        return;
    }
    
    gs.info(`DRRB ${current.number}: State changed from ${previousState} to ${currentState}`);
    
    switch (currentState) {
        case 'pending':
            handlePendingState(current);
            break;
        case 'approved':
            handleApprovedState(current);
            break;
        case 'denied':
            handleDeniedState(current);
            break;
        case 'vat_review':
            handleVatReviewState(current);
            break;
        case 'it_ops_review':
            handleItOpsReviewState(current);
            break;
        case 'voting':
            handleVotingState(current);
            break;
        case 'tasked':
            handleTaskedState(current);
            break;
        case 'completed':
            handleCompletedState(current);
            break;
    }
}

/**
 * Handle transition to pending state - notify Functional Director
 */
function handlePendingState(current) {
    gs.addInfoMessage('DRRB request submitted and pending Functional Director review');
    
    // Set functional director if not already set
    if (!current.functional_director) {
        // In a real implementation, you would query for the appropriate functional director
        // based on directorate, branch, etc.
        gs.warn('Functional Director not assigned for DRRB ' + current.number);
    }
    
    // Log event
    gs.eventQueue('drrb.functional_director.notification', current, current.functional_director, current.submitter);
}

/**
 * Handle transition to approved state by Functional Director - route to VAT
 */
function handleApprovedState(current) {
    // Move to VAT review
    current.state = 'vat_review';
    gs.addInfoMessage('Request approved by Functional Director. Routing to Virtual Architecture Team (VAT)');
    
    // Log event
    gs.eventQueue('drrb.vat.notification', current);
}

/**
 * Handle transition to denied state
 */
function handleDeniedState(current) {
    gs.addInfoMessage('DRRB request has been denied');
    
    // Notify submitter
    gs.eventQueue('drrb.denied.notification', current, current.submitter);
}

/**
 * Handle VAT review state
 */
function handleVatReviewState(current) {
    gs.addInfoMessage('DRRB request is under VAT (Virtual Architecture Team) review');
    
    // Auto-transition to IT Ops review after VAT approval
    // In real implementation, this would be triggered by VAT user action
}

/**
 * Handle IT Ops review state - determine voting vs non-voting path
 */
function handleItOpsReviewState(current) {
    gs.addInfoMessage('DRRB request is under IT Operations review');
    
    // Determine path based on criteria
    const needsVoting = requiresVotingPath(current);
    
    if (needsVoting) {
        current.state = 'voting';
        gs.addInfoMessage('Request requires Directors and Staff voting due to high impact/complexity');
        gs.eventQueue('drrb.directors_voting.notification', current);
    } else {
        // Route directly to appropriate division
        assignToDivision(current);
        gs.addInfoMessage('Request routed directly to appropriate division (non-voting path)');
    }
}

/**
 * Handle voting state
 */
function handleVotingState(current) {
    gs.addInfoMessage('DRRB request is in Directors and Staff voting phase');
    
    // In real implementation, this would track voting results
    // For now, we'll simulate automatic approval after voting
    setTimeout(() => {
        assignToDivision(current);
    }, 1000); // Simulate voting delay
}

/**
 * Assign request to appropriate division based on workload and request type
 */
function assignToDivision(current) {
    const requestType = current.description.toString().toLowerCase();
    let assignedDivision = '';
    
    // Logic to determine division assignment
    if (requestType.includes('innovation') || requestType.includes('new technology')) {
        assignedDivision = 'id'; // Innovation Division
    } else if (requestType.includes('architecture') || requestType.includes('design')) {
        assignedDivision = 'admd'; // Architecture Design & Management Division
    } else if (requestType.includes('enterprise') || requestType.includes('integration')) {
        assignedDivision = 'gpd'; // General Purpose Division
    } else {
        // Default assignment based on directorate
        if (current.directorate === 'emod') {
            assignedDivision = 'id'; // Default EMoD to Innovation Division
        } else {
            assignedDivision = 'g6'; // Default others to G6
        }
    }
    
    current.division_assignment = assignedDivision;
    current.state = 'tasked';
    
    gs.addInfoMessage(`Request assigned to ${assignedDivision.toUpperCase()} division`);
    gs.eventQueue('drrb.division.assigned', current);
}

/**
 * Handle tasked state
 */
function handleTaskedState(current) {
    gs.addInfoMessage('DRRB request has been tasked to appropriate division');
    
    // Notify assigned division
    gs.eventQueue('drrb.division.notification', current);
}

/**
 * Handle completed state
 */
function handleCompletedState(current) {
    gs.addInfoMessage('DRRB request has been completed');
    
    // Notify all stakeholders
    gs.eventQueue('drrb.completed.notification', current, current.submitter);
}

/**
 * Calculate priority based on various factors
 * @param {GlideRecord} current - Current DRRB record
 * @returns {number} - Priority value (1 = highest, 5 = lowest)
 */
export function calculatePriority(current) {
    let priority = 4; // Default priority
    
    // High priority criteria
    if (current.directorate === 'emod') {
        priority -= 1; // EMoD requests get higher priority
    }
    
    const description = current.description.toString().toLowerCase();
    if (description.includes('security') || description.includes('critical')) {
        priority -= 2; // Security/critical requests get highest priority
    }
    
    if (description.includes('urgent') || description.includes('emergency')) {
        priority -= 1; // Urgent requests get higher priority
    }
    
    // Ensure priority stays within bounds (1-5)
    return Math.max(1, Math.min(5, priority));
}