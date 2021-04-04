import { combineReducers } from 'redux';

import recipes from 'redux/reducers/recipes.reducer';
import authentication from 'redux/reducers/authentication.reducer';
import registration from 'redux/reducers/registration.reducer';
import alert from 'redux/reducers/alert.reducer';
import filter from 'redux/reducers/filter.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  recipes,
  filter,
});

export default rootReducer;