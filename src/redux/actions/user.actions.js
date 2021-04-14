import userConstants from 'constants/user.constants';
import alertActions from 'redux/actions/alert.actions';
import userService from 'services/user.service';
import { withRouter } from 'react-router';

const login = (username, password) => {

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return dispatch => {

    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };
};

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
};

const register = (username, password, confirmPassword, email, termsOfUse) => {

  function request() {
    return { type: userConstants.REGISTER_REQUEST };
  }

  function success() {
    return { type: userConstants.REGISTER_SUCCESS };
  }

  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    userService.register(username, password, confirmPassword, email, termsOfUse)
      .then(() => {
          dispatch(success());
          dispatch(alertActions.success(['Rejestracja udana', 'Aby aktywować konto kliknij w link aktywacyjny w przesłanej przez nas wiadomości']));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(['Rejestracja nieudana', error.toString()]));
        },
      );
  };
};

export default withRouter({
  login,
  logout,
  register,
});