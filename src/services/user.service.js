import appConstants from 'constants/app.constants';

function logout() {
  localStorage.removeItem('user');
}

function handleResponse(response) {
  return response.text().then(text => {

    if (response.status === 409)
      return Promise.reject(text);

    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
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

export default {
  login,
  logout,
  register,
};