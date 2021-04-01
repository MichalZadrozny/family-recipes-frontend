import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainWrapper from 'views/MainView/MainView';
import MainTemplate from 'templates/MainTemplate';
import AddRecipeView from 'views/AddRecipeView/AddRecipeView';
import UserProfileView from 'views/UserProfileView/UserProfileView';
import LoginView from 'views/LoginView/LoginView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path='/' component={MainWrapper} />
        <Route exact path='/add-recipe' component={AddRecipeView} />
        <Route exact path='/user' component={UserProfileView} />
        {/* <Route exact path='/login' component={LoginPage} /> */}
        <Route exact path='/login' component={LoginView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>

);

export default Root;
