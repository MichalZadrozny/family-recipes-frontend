import filterConstants from 'constants/filter.constants';

export const handleCheckboxChange = (event) => ({
  type: filterConstants.CHANGE_CHECKBOX,
  payload: {
    event,
  },
});

export const clearFilterCheckboxes = (event) => ({
  type: filterConstants.CLEAR_FILTER_CHECKBOXES,
  payload: {
    event,
  },
});