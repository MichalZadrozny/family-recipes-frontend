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
      return {};
    default:
      return state;
  }
};

export default alert;