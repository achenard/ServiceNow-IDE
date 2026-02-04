import '@servicenow/sdk/global';
import { Table, StringColumn } from '@servicenow/sdk/core';

export const x_snc_hrc_change_2_type_of_briefing = Table({
  name: 'x_snc_hrc_change_2_type_of_briefing',
  label: 'Type of Briefing',
  schema: {
    number: StringColumn({
      label: 'Number',
      maxLength: 40,
      read_only: true
    }),
    short_description: StringColumn({
      label: 'Short Description',
      maxLength: 160
    }),
    description: StringColumn({
      label: 'Description',
      maxLength: 4000
    }),
    type_of_briefing: StringColumn({
      label: 'Type of Briefing',
      mandatory: true,
      maxLength: 200,
      choices: {
        information: { label: 'Information', sequence: 0 },
        guidance: { label: 'Guidance', sequence: 1 },
        decision: { label: 'Decision', sequence: 2 }
      },
      dropdown: 'dropdown_without_none'
    }),
    state: StringColumn({
      label: 'State',
      maxLength: 40,
      choices: {
        draft: { label: 'Draft', sequence: 0 },
        active: { label: 'Active', sequence: 1 },
        completed: { label: 'Completed', sequence: 2 },
        cancelled: { label: 'Cancelled', sequence: 3 }
      },
      dropdown: 'dropdown_with_none',
      default: 'draft'
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
    prefix: 'TOB',
    number: 1000,
    number_of_digits: 7
  },
  extensible: false,
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  accessible_from: 'public'
});