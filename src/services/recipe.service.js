import appConstants from 'constants/app.constants';

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function getRecipePreviews() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${appConstants.BACKEND_URL}/api/recipes`, requestOptions).then(handleResponse);
}

export default {
  getRecipePreviews,
};