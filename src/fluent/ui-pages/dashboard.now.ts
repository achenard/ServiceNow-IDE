import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import dashboard from '../../client/index.html';

export const crma_dashboard = UiPage({
  $id: Now.ID['crma-dashboard'],
  endpoint: 'x_snc_hrc_change_2_dashboard.do',
  html: dashboard,
  direct: true,
  description: 'HRC Change Release Management Application (CRMA) Dashboard - provides comprehensive DRRB tracking and management capabilities'
});