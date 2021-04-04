import recipeConstants from 'constants/recipe.constants';
import recipeService from 'services/recipe.service';

// eslint-disable-next-line import/prefer-default-export
const addRecipe = (itemContent) => ({
  type: recipeConstants.ADD_RECIPE,
  payload: {
    itemContent,
  },
});


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

export default {
  addRecipe,
  getRecipePreviews,
};