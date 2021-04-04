import React from 'react';
import recipeConstants from 'constants/recipe.constants';

const initialState = {
  items: [],
  loading: false,
};

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case(recipeConstants.ADD_RECIPE):
      return {
        ...state,
        items: [
          ...state.items,
          action.payload.itemContent,
        ],
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