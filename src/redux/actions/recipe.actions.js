import recipeConstants from 'constants/recipe.constants';
import recipeService from 'services/recipe.service';
import alertActions from './alert.actions';

const addRecipe = (recipe) => {

  // eslint-disable-next-line no-shadow
  function request(recipe) {
    return { type: recipeConstants.ADD_RECIPE_REQUEST, recipe };
  }

  // eslint-disable-next-line no-shadow
  function success(recipe) {
    return { type: recipeConstants.ADD_RECIPE_SUCCESS, recipe };
  }

  function failure(error) {
    return { type: recipeConstants.ADD_RECIPE_FAILURE, error };
  }

  return dispatch => {

    dispatch(request());
    recipeService.addRecipe(recipe)
      .then(response => dispatch(success(response)))
      .catch(response => dispatch(failure(response.toString())),
      );
  };
};


const getRecipePreviews = () => {

  function request() {
    return { type: recipeConstants.GET_PREVIEWS_REQUEST };
  }

  function success(recipes) {
    return { type: recipeConstants.GET_PREVIEWS_SUCCESS, recipes };
  }

  function failure(error) {
    return { type: recipeConstants.GET_PREVIEWS_FAILURE, error };
  }

  return dispatch => {

    dispatch(request());
    recipeService.getRecipePreviews()
      .then(
        recipes => dispatch(success(recipes)),
        error => dispatch(failure(error.toString())),
      );
  };
};

const getUserRecipePreviews = (userId) => {

  function request() {
    return { type: recipeConstants.GET_USER_PREVIEWS_REQUEST };
  }

  function success(recipes) {
    return { type: recipeConstants.GET_USER_PREVIEWS_SUCCESS, recipes };
  }

  function failure(error) {
    return { type: recipeConstants.GET_USER_PREVIEWS_FAILURE, error };
  }

  return dispatch => {

    dispatch(request());
    recipeService.getUserRecipePreviews(userId)
      .then(
        recipes => dispatch(success(recipes)),
        error => dispatch(failure(error.toString())),
      );
  };
};

const getSingleRecipe = (id) => {

  function request() {
    return { type: recipeConstants.GET_RECIPE_REQUEST };
  }

  function success(recipe) {
    return { type: recipeConstants.GET_RECIPE_SUCCESS, recipe };
  }

  function failure() {
    return { type: recipeConstants.GET_RECIPE_FAILURE };
  }

  return dispatch => {

    dispatch(request());
    recipeService.getSingleRecipe(id)
      .then(recipe => dispatch(success(recipe)))
      .catch(
        () => dispatch(failure(),
          dispatch(alertActions.error(['Przepis nie został znaleziony', 'Podano nieprawidłowy adres lub szukany przepis już nie istnieje']))),
      );
  };
};

const addRating = (userId, recipeId, newRating) => {

  function request() {
    return { type: recipeConstants.ADD_RATING_REQUEST };
  }

  function success(recipe) {
    return { type: recipeConstants.ADD_RATING_SUCCESS, recipe };
  }

  function failure(error) {
    return { type: recipeConstants.ADD_RATING_FAILURE, error };
  }

  return dispatch => {
    dispatch(request());
    recipeService.addRating(userId, recipeId, newRating)
      .then(recipe => dispatch(success(recipe)))
      .catch(error => dispatch(failure(error)),
      );
  };
};

export default {
  addRecipe,
  addRating,
  getRecipePreviews,
  getUserRecipePreviews,
  getSingleRecipe,
};