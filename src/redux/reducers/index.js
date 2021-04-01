import { combineReducers } from 'redux';

import recipes from 'redux/reducers/recipe.reducer';
import authentication from 'redux/reducers/authentication.reducer';
import registration from 'redux/reducers/registration.reducer';
import users from 'redux/reducers/users.reducer';
import alert from 'redux/reducers/alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  recipes,
});

export default rootReducer;