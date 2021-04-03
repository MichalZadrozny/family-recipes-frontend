import userConstants from 'constants/user.constants';
import alertActions from 'actions/alert.actions';
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

function getAll() {
  function request() {
    return { type: userConstants.GETALL_REQUEST };
  }

  function success(users) {
    return { type: userConstants.GETALL_SUCCESS, users };
  }

  function failure(error) {
    return { type: userConstants.GETALL_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString())),
      );
  };
}

// prefixed function name with underscore because delete is a reserved word in javascript
// eslint-disable-next-line no-underscore-dangle
function _delete(id) {
  // eslint-disable-next-line no-shadow
  function request(id) {
    return { type: userConstants.DELETE_REQUEST, id };
  }

  // eslint-disable-next-line no-shadow
  function success(id) {
    return { type: userConstants.DELETE_SUCCESS, id };
  }

  // eslint-disable-next-line no-shadow
  function failure(id, error) {
    return { type: userConstants.DELETE_FAILURE, id, error };
  }

  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(() => dispatch(success(id)),
        error => dispatch(failure(id, error.toString())),
      );
  };
}

export default withRouter({
  login,
  logout,
  register,
  getAll,
  delete: _delete,
});