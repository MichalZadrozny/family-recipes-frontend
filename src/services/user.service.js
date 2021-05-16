import appConstants from 'constants/app.constants';

function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then(text => {

    if (!response.ok) {
      return Promise.reject(text);
    }

    return text && JSON.parse(text);
  });
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${appConstants.BACKEND_URL}/api/user/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function register(username, password, confirmPassword, email, termsOfUse) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, confirmPassword, email, termsOfUse }),
  };

  return fetch(`${appConstants.BACKEND_URL}/api/user/sign-up`, requestOptions).then(handleResponse);
}

function recoverPassword(email) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${appConstants.BACKEND_URL}/api/user/recover-password?email=${email}`, requestOptions)
    .then(handleResponse);
}

function setNewPassword(password, confirmPassword, token) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, confirmPassword, token }),
  };

  return fetch(`${appConstants.BACKEND_URL}/api/user/change-password`, requestOptions)
    .then(handleResponse);
}

export default {
  login,
  logout,
  register,
  recoverPassword,
  setNewPassword,
};