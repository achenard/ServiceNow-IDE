import '@servicenow/sdk/global';
import { Acl } from '@servicenow/sdk/core';
import { 
  crma_user, 
  requesting_functional, 
  functional_director, 
  vat_member, 
  it_operations, 
  directors_staff,
  emod_id,
  emod_gpd,
  emod_admd,
  g3_user,
  g6_user,
  crma_admin 
} from '../roles/crma_roles.now.ts';

// ========== DRRB Table ACLs ==========

// DRRB - Create: Only Requesting Functional and above can create DRRB records
export const drrb_create_acl = Acl({
  $id: Now.ID['drrb_create_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_drrb',
  operation: 'create',
  roles: [requesting_functional, crma_admin],
  active: true,
  description: 'Allow Requesting Functional users and CRMA Admins to create DRRB records'
});

// DRRB - Read: All CRMA users can read DRRB records
export const drrb_read_acl = Acl({
  $id: Now.ID['drrb_read_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_drrb',
  operation: 'read',
  roles: [crma_user, crma_admin],
  active: true,
  description: 'Allow all CRMA users to read DRRB records'
});

// DRRB - Write: Functional Directors, VAT, IT Ops, Directors/Staff, and Admins can update
export const drrb_write_acl = Acl({
  $id: Now.ID['drrb_write_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_drrb',
  operation: 'write',
  roles: [functional_director, vat_member, it_operations, directors_staff, emod_id, emod_gpd, emod_admd, g3_user, g6_user, crma_admin],
  active: true,
  description: 'Allow workflow participants to update DRRB records'
});

// DRRB - Delete: Only CRMA Admins can delete DRRB records
export const drrb_delete_acl = Acl({
  $id: Now.ID['drrb_delete_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_drrb',
  operation: 'delete',
  roles: [crma_admin],
  active: true,
  description: 'Only CRMA Admins can delete DRRB records'
});

// ========== Application/System Table ACLs ==========

// Application/System - Create: IT Operations and above can create
export const app_system_create_acl = Acl({
  $id: Now.ID['app_system_create_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_application_system',
  operation: 'create',
  roles: [it_operations, crma_admin],
  active: true,
  description: 'Allow IT Operations and CRMA Admins to create Application/System records'
});

// Application/System - Read: All CRMA users can read
export const app_system_read_acl = Acl({
  $id: Now.ID['app_system_read_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_application_system',
  operation: 'read',
  roles: [crma_user, crma_admin],
  active: true,
  description: 'Allow all CRMA users to read Application/System records'
});

// Application/System - Write: IT Operations and above can update
export const app_system_write_acl = Acl({
  $id: Now.ID['app_system_write_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_application_system',
  operation: 'write',
  roles: [it_operations, crma_admin],
  active: true,
  description: 'Allow IT Operations and CRMA Admins to update Application/System records'
});

// Application/System - Delete: Only CRMA Admins can delete
export const app_system_delete_acl = Acl({
  $id: Now.ID['app_system_delete_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_application_system',
  operation: 'delete',
  roles: [crma_admin],
  active: true,
  description: 'Only CRMA Admins can delete Application/System records'
});

// ========== Type of Briefing Table ACLs ==========

// Type of Briefing - Create: All CRMA users can create briefing types
export const briefing_create_acl = Acl({
  $id: Now.ID['briefing_create_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_type_of_briefing',
  operation: 'create',
  roles: [crma_user, crma_admin],
  active: true,
  description: 'Allow all CRMA users to create Type of Briefing records'
});

// Type of Briefing - Read: All CRMA users can read
export const briefing_read_acl = Acl({
  $id: Now.ID['briefing_read_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_type_of_briefing',
  operation: 'read',
  roles: [crma_user, crma_admin],
  active: true,
  description: 'Allow all CRMA users to read Type of Briefing records'
});

// Type of Briefing - Write: All CRMA users can update
export const briefing_write_acl = Acl({
  $id: Now.ID['briefing_write_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_type_of_briefing',
  operation: 'write',
  roles: [crma_user, crma_admin],
  active: true,
  description: 'Allow all CRMA users to update Type of Briefing records'
});

// Type of Briefing - Delete: Functional Directors and above can delete
export const briefing_delete_acl = Acl({
  $id: Now.ID['briefing_delete_acl'],
  type: 'record',
  table: 'x_snc_hrc_change_2_type_of_briefing',
  operation: 'delete',
  roles: [functional_director, crma_admin],
  active: true,
  description: 'Allow Functional Directors and CRMA Admins to delete Type of Briefing records'
});