import React from 'react';
import filterConstants from 'constants/filter.constants';

const initialState = {
  diet: {
    meat: false,
    vegetarian: false,
    vegan: false,
  },
  filterIsVisible: true,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case(filterConstants.CHANGE_CHECKBOX):
      return {
        ...state,
        diet: {
          ...state.diet,
          [action.payload.event.target.id]: !state.diet[action.payload.event.target.id],
        },
      };
    case(filterConstants.CLEAR_FILTER_CHECKBOXES):
      return {
        ...state,
        diet: {
          vegan: false,
          vegetarian: false,
          meat: false,
        },
      };
    case(filterConstants.TOGGLE_FILTER):
      return {
        ...state,
        filterIsVisible: !state.filterIsVisible,
      };
    default:
      return state;
  }
};

export default filter;