// eslint-disable-next-line import/prefer-default-export
export const handleCheckboxChange = (event) => ({
  type: 'CHANGE_CHECKBOX',
  payload: {
    event,
  },
});

export const clearFilterCheckboxes = (event) => ({
  type: 'CLEAR_FILTER_CHECKBOXES',
  payload: {
    event,
  },
});