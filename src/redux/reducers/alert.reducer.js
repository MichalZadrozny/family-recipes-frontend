import alertConstants from 'constants/alert.constants';

const alert = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alertSuccess',
        message: action.message,
      };
    case alertConstants.ERROR:
      return {
        type: 'alertError',
        message: action.message,
      };
    case alertConstants.CLEAR:
      if (state.alert && state.alert.doNotClear) {
        return {
          ...state,
          doNotClear: false,
        };
      }
      return {};
    case alertConstants.DO_NOT_CLEAR:
      return {
        ...state,
        doNotClear: action.doNotClear,
      };
    default:
      return state;
  }
};

export default alert;