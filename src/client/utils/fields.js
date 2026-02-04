// Field extraction utilities for ServiceNow data with sysparm_display_value=all
export const display = (field) => {
  if (typeof field === 'string') {
    return field;
  }
  return field?.display_value || '';
};

export const value = (field) => {
  if (typeof field === 'string') {
    return field;
  }
  return field?.value || '';
};