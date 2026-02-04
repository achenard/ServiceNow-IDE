import '@servicenow/sdk/global';
import { Role } from '@servicenow/sdk/core';

// Base CRMA User Role - all users need this for basic access
export const crma_user = Role({
  $id: Now.ID['crma_user'],
  name: 'x_snc_hrc_change_2.crma_user',
  description: 'Base role for all CRMA application users. Provides read access to view DRRB records and basic application functionality.',
  grantable: true
});

// Requesting Functional Role - can create and submit DRRB requests
export const requesting_functional = Role({
  $id: Now.ID['requesting_functional'],
  name: 'x_snc_hrc_change_2.requesting_functional',
  description: 'Role for users who can create and submit DRRB requests. Typical end-users of the CRMA system.',
  containsRoles: [crma_user],
  grantable: true
});

// Functional Director Role - can approve, review, or disapprove requests
export const functional_director = Role({
  $id: Now.ID['functional_director'],
  name: 'x_snc_hrc_change_2.functional_director',
  description: 'Role for Functional Directors who can approve, review, or disapprove DRRB requests. First level of approval in the workflow.',
  containsRoles: [crma_user],
  grantable: true
});

// VAT (Virtual Architecture Team) Role - reviews and approves/disapproves requests
export const vat_member = Role({
  $id: Now.ID['vat_member'],
  name: 'x_snc_hrc_change_2.vat_member',
  description: 'Role for Virtual Architecture Team members who review and approve or disapprove DRRB requests after Functional Director approval.',
  containsRoles: [crma_user],
  grantable: true
});

// IT Operations Role - reviews, approves, disapproves, assigns or routes requests
export const it_operations = Role({
  $id: Now.ID['it_operations'],
  name: 'x_snc_hrc_change_2.it_operations',
  description: 'Role for IT Operations team members who handle the operational review and routing of DRRB requests.',
  containsRoles: [crma_user],
  grantable: true
});

// Directors and Staff Role - handles enterprise-level voting and prioritization
export const directors_staff = Role({
  $id: Now.ID['directors_staff'],
  name: 'x_snc_hrc_change_2.directors_staff',
  description: 'Role for HRC Directors and Staff who participate in enterprise-level voting and prioritization of high-impact DRRB requests.',
  containsRoles: [crma_user],
  grantable: true
});

// EMoD Division Roles - Enterprise Modernization Directorate
export const emod_id = Role({
  $id: Now.ID['emod_id'],
  name: 'x_snc_hrc_change_2.emod_id',
  description: 'Role for Enterprise Modernization Directorate - Innovation Division members.',
  containsRoles: [crma_user],
  grantable: true
});

export const emod_gpd = Role({
  $id: Now.ID['emod_gpd'],
  name: 'x_snc_hrc_change_2.emod_gpd',
  description: 'Role for Enterprise Modernization Directorate - General Purpose Division members.',
  containsRoles: [crma_user],
  grantable: true
});

export const emod_admd = Role({
  $id: Now.ID['emod_admd'],
  name: 'x_snc_hrc_change_2.emod_admd',
  description: 'Role for Enterprise Modernization Directorate - Architecture Design & Management Division members.',
  containsRoles: [crma_user],
  grantable: true
});

// G3 and G6 Roles
export const g3_user = Role({
  $id: Now.ID['g3_user'],
  name: 'x_snc_hrc_change_2.g3_user',
  description: 'Role for G3 personnel who handle non-Enterprise initiatives and technical correspondence.',
  containsRoles: [crma_user],
  grantable: true
});

export const g6_user = Role({
  $id: Now.ID['g6_user'],
  name: 'x_snc_hrc_change_2.g6_user',
  description: 'Role for G6 personnel who handle non-Enterprise initiatives and technical correspondence.',
  containsRoles: [crma_user],
  grantable: true
});

// CRMA Administrator Role - full administrative access
export const crma_admin = Role({
  $id: Now.ID['crma_admin'],
  name: 'x_snc_hrc_change_2.crma_admin',
  description: 'Administrative role for CRMA application with full access to all records, configurations, and administrative functions.',
  containsRoles: [requesting_functional, functional_director, vat_member, it_operations, directors_staff, emod_id, emod_gpd, emod_admd, g3_user, g6_user],
  scopedAdmin: true,
  grantable: true
});