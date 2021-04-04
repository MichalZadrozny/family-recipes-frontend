import recipeConstants from 'constants/recipe.constants';

// eslint-disable-next-line import/prefer-default-export
export const addRecipe = (itemContent) => ({
  type: recipeConstants.ADD_RECIPE,
  payload: {
    itemContent,
  },
});