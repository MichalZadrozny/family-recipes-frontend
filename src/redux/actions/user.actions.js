import userConstants from 'constants/user.constants';
import alertActions from 'redux/actions/alert.actions';
import userService from 'services/user.service';

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
      .then(user => dispatch(success(user)))
      .catch(
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(['Logowanie nieudane', 'Użytkownik nie został znaleziony']));
        },
      );
  };
};

const recoverPassword = (email) => dispatch => {
  userService.recoverPassword(email)
    .then(() => {
      dispatch(alertActions.success(['Email został wysłany', 'Aby zmienić hasło kliknij w link w przesłanej przez nas wiadomości']));
    })
    .catch(error => {
      dispatch(alertActions.error(['Odzyskiwanie hasła nieudane', error.toString()]));
    });
};

const setNewPassword = (password, confirmPassword, token) => dispatch => {
  userService.setNewPassword(password, confirmPassword, token)
    .then(() => {
      dispatch(alertActions.success(['Hasło zostało zmienione', 'Moższ się zalogować używając nowego hasła']));
    })
    .catch(() => {
      dispatch(alertActions.error(['Odzyskiwanie hasła nieudane', 'Niepoprawny link']));
    });
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
      }).catch(
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(['Rejestracja nieudana', error.toString()]));
      });
  };
};

const togglePasswordRecovery = () => ({ type: userConstants.TOGGLE_PASSWORD_RECOVERY });
const setPasswordRecoveryToFalse = () => ({ type: userConstants.TOGGLE_PASSWORD_RECOVERY_FALSE });

export default {
  login,
  logout,
  register,
  togglePasswordRecovery,
  recoverPassword,
  setNewPassword,
  setPasswordRecoveryToFalse,
};