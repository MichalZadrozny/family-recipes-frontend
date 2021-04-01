import axios from 'axios';
import userConstants from '../constants/user.constants';
import userService from '../services/user.service';
import history from '../helpers/history';
import alertActions from './alert.actions';

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

export const login = (username, password) => {

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  console.log('TEST 111');

  return dispatch => {

    console.log('TEST 2');

    dispatch(request({ username }));

    console.log('TEST 3');

    userService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };
};