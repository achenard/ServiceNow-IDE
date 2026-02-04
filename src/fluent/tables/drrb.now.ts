import '@servicenow/sdk/global';
import { Table, StringColumn, ReferenceColumn, IntegerColumn, DateTimeColumn } from '@servicenow/sdk/core';

export const x_snc_hrc_change_2_drrb = Table({
  name: 'x_snc_hrc_change_2_drrb',
  label: 'DRRB',
  schema: {
    number: StringColumn({
      label: 'DRRB ID',
      maxLength: 40,
      read_only: true
    }),
    short_description: StringColumn({
      label: 'Title',
      mandatory: true,
      maxLength: 160
    }),
    description: StringColumn({
      label: 'Request Description',
      maxLength: 4000
    }),
    priority: IntegerColumn({
      label: 'Priority',
      read_only: true,
      default: 4
    }),
    submitter: ReferenceColumn({
      label: 'Submitter',
      referenceTable: 'sys_user'
    }),
    directorate: StringColumn({
      label: 'Directorate',
      maxLength: 40,
      choices: {
        tagd: { label: 'TAGD', sequence: 0 },
        rpmd: { label: 'RPMD', sequence: 1 },
        emod: { label: 'EMoD', sequence: 2 },
        ad: { label: 'AD', sequence: 3 },
        mprd: { label: 'MPRD', sequence: 4 },
        staff: { label: 'STAFF', sequence: 5 }
      },
      dropdown: 'dropdown_with_none'
    }),
    branch: StringColumn({
      label: 'Branch',
      maxLength: 100
    }),
    application_system: ReferenceColumn({
      label: 'Application/System',
      referenceTable: 'x_snc_hrc_change_2_application_system'
    }),
    functional_director: ReferenceColumn({
      label: 'Functional Director/Staff OIC',
      referenceTable: 'sys_user'
    }),
    state: StringColumn({
      label: 'Status',
      maxLength: 40,
      choices: {
        pre_approval: { label: 'Pre-Approval', sequence: 0 },
        pending: { label: 'Pending', sequence: 1 },
        approved: { label: 'Approved', sequence: 2 },
        denied: { label: 'Denied', sequence: 3 },
        in_review: { label: 'In Review', sequence: 4 },
        vat_review: { label: 'VAT Review', sequence: 5 },
        it_ops_review: { label: 'IT Ops Review', sequence: 6 },
        voting: { label: 'Voting', sequence: 7 },
        tasked: { label: 'Tasked', sequence: 8 },
        completed: { label: 'Completed', sequence: 9 }
      },
      dropdown: 'dropdown_with_none',
      default: 'pre_approval'
    }),
    division_assignment: StringColumn({
      label: 'Division Assignment',
      maxLength: 100,
      choices: {
        id: { label: 'ID (Innovation Division)', sequence: 0 },
        gpd: { label: 'GPD (General Purpose Division)', sequence: 1 },
        admd: { label: 'ADMD (Architecture Design & Management Division)', sequence: 2 },
        g3: { label: 'G3', sequence: 3 },
        g6: { label: 'G6', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    assigned_to: ReferenceColumn({
      label: 'Assigned to',
      referenceTable: 'sys_user'
    }),
    opened_by: ReferenceColumn({
      label: 'Opened by',
      referenceTable: 'sys_user',
      default: 'javascript:gs.getUserID()'
    }),
    opened: DateTimeColumn({
      label: 'Opened',
      default: 'javascript:gs.nowDateTime()'
    }),
    updated: DateTimeColumn({
      label: 'Updated',
      default: 'javascript:gs.nowDateTime()'
    }),
    active: StringColumn({
      label: 'Active',
      maxLength: 40,
      choices: {
        'true': { label: 'True', sequence: 0 },
        'false': { label: 'False', sequence: 1 }
      },
      dropdown: 'dropdown_with_none',
      default: 'true'
    })
  },
  display: 'short_description',
  auto_number: {
    prefix: 'DRRB',
    number: 1000,
    number_of_digits: 7
  },
  extensible: true,
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  accessible_from: 'public',
  audit: true
});