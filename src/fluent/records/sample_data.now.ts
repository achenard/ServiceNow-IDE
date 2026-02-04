import '@servicenow/sdk/global';
import { Record } from '@servicenow/sdk/core';

// Sample Application/System records
export const app_system_1 = Record({
  $id: Now.ID['app_system_1'],
  table: 'x_snc_hrc_change_2_application_system',
  data: {
    name: 'av_knox_hrc',
    short_description: 'AV-KNOX HRC Security System',
    description: 'Audio-Visual Knox Human Resources Command security and access management system'
  }
});

export const app_system_2 = Record({
  $id: Now.ID['app_system_2'],
  table: 'x_snc_hrc_change_2_application_system',
  data: {
    name: 'cui_hrc',
    short_description: 'Controlled Unclassified Information HRC',
    description: 'System for managing controlled unclassified information within HRC'
  }
});

export const app_system_3 = Record({
  $id: Now.ID['app_system_3'],
  table: 'x_snc_hrc_change_2_application_system',
  data: {
    name: 'dcips',
    short_description: 'Defense Civilian Intelligence Personnel System',
    description: 'Personnel management system for defense civilian intelligence personnel'
  }
});

export const app_system_4 = Record({
  $id: Now.ID['app_system_4'],
  table: 'x_snc_hrc_change_2_application_system',
  data: {
    name: 'edes',
    short_description: 'Electronic Data Exchange System',
    description: 'System for secure electronic data exchange and processing'
  }
});

export const app_system_5 = Record({
  $id: Now.ID['app_system_5'],
  table: 'x_snc_hrc_change_2_application_system',
  data: {
    name: 'epmdtk',
    short_description: 'Enterprise Project Management Data Toolkit',
    description: 'Comprehensive toolkit for enterprise project management and data analysis'
  }
});

// Sample Type of Briefing records
export const briefing_1 = Record({
  $id: Now.ID['briefing_1'],
  table: 'x_snc_hrc_change_2_type_of_briefing',
  data: {
    short_description: 'System Security Information Brief',
    description: 'Information briefing on current system security protocols and procedures',
    type_of_briefing: 'information',
    state: 'active'
  }
});

export const briefing_2 = Record({
  $id: Now.ID['briefing_2'],
  table: 'x_snc_hrc_change_2_type_of_briefing',
  data: {
    short_description: 'Personnel Management Guidance',
    description: 'Guidance briefing on updated personnel management procedures',
    type_of_briefing: 'guidance',
    state: 'active'
  }
});

export const briefing_3 = Record({
  $id: Now.ID['briefing_3'],
  table: 'x_snc_hrc_change_2_type_of_briefing',
  data: {
    short_description: 'Budget Allocation Decision',
    description: 'Decision briefing for upcoming budget allocation decisions',
    type_of_briefing: 'decision',
    state: 'draft'
  }
});

// Sample DRRB records
export const drrb_1 = Record({
  $id: Now.ID['drrb_1'],
  table: 'x_snc_hrc_change_2_drrb',
  data: {
    short_description: 'Upgrade DCIPS Authentication System',
    description: 'Request to upgrade the current authentication system in DCIPS to support multi-factor authentication and improved security protocols. This will enhance system security and comply with new DoD requirements.',
    directorate: 'emod',
    branch: 'Information Systems Branch',
    state: 'pre_approval',
    priority: 2
  }
});

export const drrb_2 = Record({
  $id: Now.ID['drrb_2'],
  table: 'x_snc_hrc_change_2_drrb',
  data: {
    short_description: 'Implement CUI-HRC Data Encryption',
    description: 'Request to implement advanced data encryption capabilities in the CUI-HRC system to protect sensitive controlled unclassified information during transmission and storage.',
    directorate: 'tagd',
    branch: 'Cybersecurity Operations',
    state: 'pending',
    priority: 1
  }
});

export const drrb_3 = Record({
  $id: Now.ID['drrb_3'],
  table: 'x_snc_hrc_change_2_drrb',
  data: {
    short_description: 'EDES Integration with External Partners',
    description: 'Request to develop integration capabilities for EDES to securely exchange data with external partner organizations while maintaining compliance and security standards.',
    directorate: 'rpmd',
    branch: 'Integration Services',
    state: 'in_review',
    priority: 3
  }
});