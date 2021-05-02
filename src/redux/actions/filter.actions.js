import filterConstants from 'constants/filter.constants';

export const handleCheckboxChange = (event) => ({
  type: filterConstants.CHANGE_CHECKBOX,
  payload: {
    event,
  },
});

const clearFilter = (event) => ({
  type: filterConstants.CLEAR_FILTER,
  payload: {
    event,
  },
});

const toggleFilter = () => ({
  type: filterConstants.TOGGLE_FILTER,
});

const changeMaxTimeValue = (event) => ({
  type: filterConstants.CHANGE_MAX_TIME,
  payload: {
    event,
  },
});

export default {
  clearFilter,
  changeMaxTimeValue,
  toggleFilter,
};