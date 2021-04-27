import recipeConstants from 'constants/recipe.constants';
import recipeService from 'services/recipe.service';

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

const getSingleRecipe = (id) => {

  function request() {
    return { type: recipeConstants.GET_RECIPE_REQUEST };
  }

  function success(recipe) {
    return { type: recipeConstants.GET_RECIPE_SUCCESS, recipe };
  }

  function failure(error) {
    return { type: recipeConstants.GET_RECIPE_FAILURE, error };
  }

  return dispatch => {

    dispatch(request());
    recipeService.getSingleRecipe(id)
      .then(recipe => dispatch(success(recipe)))
      .catch(() => dispatch(failure('Przepis nie został znaleziony')),
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
  getSingleRecipe,
};