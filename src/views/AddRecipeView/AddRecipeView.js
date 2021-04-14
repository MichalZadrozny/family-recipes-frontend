import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router-dom';

import recipeActions from 'redux/actions/recipe.actions';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import styles from './AddRecipeView.module.scss';

const AddRecipeView = ({ addRecipe, loggedIn }) => (
  <>
    {
      loggedIn ?
        <Container className={styles.formContainer}>
          <AddRecipeForm addRecipe={addRecipe} />
        </Container>
        :
        <Redirect to='/login' />
    }
  </>
);

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  addRecipe: itemContent => dispatch(recipeActions.addRecipe(itemContent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipeView);

AddRecipeView.propTypes = {
  addRecipe: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};