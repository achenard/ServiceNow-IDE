import '@servicenow/sdk/global';
import { Table, StringColumn } from '@servicenow/sdk/core';

export const x_snc_hrc_change_2_application_system = Table({
  name: 'x_snc_hrc_change_2_application_system',
  label: 'Application/System',
  schema: {
    name: StringColumn({
      label: 'Name',
      mandatory: true,
      maxLength: 100,
      choices: {
        av_knox_hrc: { label: 'AV-KNOX-HRC', sequence: 0 },
        cui_hrc: { label: 'CUI-HRC', sequence: 1 },
        dcips: { label: 'DCIPS', sequence: 2 },
        edes: { label: 'EDES', sequence: 3 },
        epmdtk: { label: 'EPMDTK', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    short_description: StringColumn({
      label: 'Short Description',
      maxLength: 160
    }),
    description: StringColumn({
      label: 'Description',
      maxLength: 4000
    })
  },
  display: 'name',
  extensible: false,
  actions: ['create', 'read', 'update', 'delete'],
  allow_web_service_access: true,
  accessible_from: 'public'
});