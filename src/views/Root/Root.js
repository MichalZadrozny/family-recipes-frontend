import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

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
        <Route path='/add-recipe' component={AddRecipeView} />
        <Route path='/user' component={UserProfileView} />
        <Route path='/login' component={LoginView} />
        <Redirect to='/' />
      </Switch>
    </MainTemplate>
  </BrowserRouter>

);

export default Root;
