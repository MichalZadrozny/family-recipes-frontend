import React from 'react';
import recipeConstants from 'constants/recipe.constants';

const initialState = {
  items: [],
  selectedRecipe: null,
  loading: false,
  adding: false,
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case (recipeConstants.ADD_RECIPE_REQUEST):
      return {
        ...state,
        adding: true,
      };
    case (recipeConstants.ADD_RECIPE_SUCCESS):
      return {
        ...state,
        selectedRecipe: action.recipe,
        adding: false,
      };
    case(recipeConstants.ADD_RECIPE_FAILURE):
      return {
        ...state,
        error: action.error,
        adding: false,
      };
    case(recipeConstants.GET_PREVIEWS_REQUEST):
      return {
        ...state,
        loading: true,
      };
    case(recipeConstants.GET_PREVIEWS_SUCCESS):
      return {
        ...state,
        items: action.recipes,
        loading: false,
      };
    case(recipeConstants.GET_PREVIEWS_FAILURE):
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipe;