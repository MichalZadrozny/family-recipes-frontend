import axios from 'axios';

export const CHANGE_CHECKBOX = 'CHANGE_CHECKBOX';
export const CLEAR_FILTER_CHECKBOXES = 'CLEAR_FILTER_CHECKBOXES';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';

export const handleCheckboxChange = (event) => ({
  type: CHANGE_CHECKBOX,
  payload: {
    event,
  },
});

export const clearFilterCheckboxes = (event) => ({
  type: CLEAR_FILTER_CHECKBOXES,
  payload: {
    event,
  },
});

export const addRecipe = (itemContent) => ({
  type: ADD_ITEM,
  payload: {
    itemContent,
  },
});

export const authenticate = (username, password) => dispatch => {
  dispatch({ type: AUTHENTICATE_REQUEST });

  return axios.post('http://localhost:8080/api/user/login', {
    username,
    password,
  })
    .then(payload => {
      console.log(payload);
      dispatch({ type: AUTHENTICATE_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: AUTHENTICATE_FAILURE });
    });
};