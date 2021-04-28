import React from 'react';
import recipeConstants from 'constants/recipe.constants';

const initialState = {
  items: [],
  userRecipes: [],
  selectedRecipe: undefined,
  loading: false,
  adding: false,
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case (recipeConstants.ADD_RATING_SUCCESS):
      return {
        ...state,
        selectedRecipe: action.recipe,
      };
    case (recipeConstants.ADD_RECIPE_REQUEST):
      return {
        ...state,
        selectedRecipe: undefined,
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
        selectedRecipe: undefined,
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
    case (recipeConstants.GET_RECIPE_REQUEST):
      return {
        ...state,
        selectedRecipe: undefined,
        error: undefined,
      };
    case(recipeConstants.GET_USER_PREVIEWS_REQUEST):
      return {
        ...state,
        userRecipes: [],
        loading: true,
      };
    case(recipeConstants.GET_USER_PREVIEWS_SUCCESS):
      return {
        ...state,
        userRecipes: action.recipes,
        loading: false,
      };
    case(recipeConstants.GET_USER_PREVIEWS_FAILURE):
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case (recipeConstants.GET_RECIPE_SUCCESS):
      return {
        ...state,
        selectedRecipe: action.recipe,
      };
    case(recipeConstants.GET_RECIPE_FAILURE):
      return {
        ...state,
        selectedRecipe: undefined,
        error: action.error,
      };
    default:
      return state;
  }
};

export default recipe;