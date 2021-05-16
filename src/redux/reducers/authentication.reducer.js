import userConstants from 'constants/user.constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false, passwordRecovery: false };

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
      };
    case userConstants.TOGGLE_PASSWORD_RECOVERY:
      return {
        passwordRecovery: !state.passwordRecovery,
      };
    case userConstants.TOGGLE_PASSWORD_RECOVERY_FALSE:
      return {
        passwordRecovery: false,
      };
    default:
      return state;
  }
};

export default authentication;