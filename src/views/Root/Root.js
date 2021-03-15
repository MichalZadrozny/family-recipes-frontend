import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TestWrapper from 'components/MainWrapper/MainWrapper';
import MainTemplate from 'templates/MainTemplate';
import AddRecipeView from 'views/AddRecipeView/AddRecipeView';
import UserProfileView from 'views/UserProfileView/UserProfileView';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={TestWrapper} />
        <Route exact path='/add-recipe' component={AddRecipeView} />
        <Route exact path='/user' component={UserProfileView} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
