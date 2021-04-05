import React from 'react';
import { connect } from 'react-redux';

const RecipeView = () => (
  <h1>Recipe View</h1>
);

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps, null)(RecipeView);

RecipeView.propTypes = {};