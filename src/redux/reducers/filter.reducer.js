import React from 'react';
import filterConstants from 'constants/filter.constants';

const initialState = {
  diet: {
    meat: false,
    vegetarian: false,
    vegan: false,
  },
  filterIsVisible: true,
  maxTime: -1,
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
    case(filterConstants.CLEAR_FILTER):
      return {
        ...state,
        maxTime: -1,
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
    case(filterConstants.CHANGE_MAX_TIME):
      return {
        ...state,
        maxTime: action.payload.event.target.value,
      };
    default:
      return state;
  }
};

export default filter;