import appConstants from 'constants/app.constants';
import authHeader from 'utils/auth-header';

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

function getSingleRecipe(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(`${appConstants.BACKEND_URL}/api/recipes/${id}`, requestOptions).then(handleResponse);
}

function addRecipe(recipe) {

  const tempRecipe = recipe;

  // eslint-disable-next-line no-undef
  const formData = new FormData();
  formData.append('image', tempRecipe.image);

  delete tempRecipe.image;
  tempRecipe.username = 'admin';

  // eslint-disable-next-line no-undef
  formData.append('recipe', new Blob([JSON.stringify(tempRecipe)], {
    type: 'application/json',
  }));

  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader() },
    body: formData,
  };

  return fetch(`${appConstants.BACKEND_URL}/api/recipes`, requestOptions).then(handleResponse);
}

function addRating(userId, recipeId, newRating) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader() },
  };

  return fetch(`${appConstants.BACKEND_URL}/api/recipes/rating?userId=${userId}&recipeId=${recipeId}&newRating=${newRating}`, requestOptions).then(handleResponse);
}


export default {
  getRecipePreviews,
  getSingleRecipe,
  addRecipe,
  addRating,
};