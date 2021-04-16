import filterConstants from 'constants/filter.constants';

export const handleCheckboxChange = (event) => ({
  type: filterConstants.CHANGE_CHECKBOX,
  payload: {
    event,
  },
});

const clearFilterCheckboxes = (event) => ({
  type: filterConstants.CLEAR_FILTER_CHECKBOXES,
  payload: {
    event,
  },
});

const toggleFilter = () => ({
  type: filterConstants.TOGGLE_FILTER,
});

export default {
  clearFilterCheckboxes,
  toggleFilter,
};