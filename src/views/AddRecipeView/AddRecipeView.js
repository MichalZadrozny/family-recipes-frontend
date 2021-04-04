import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import recipeActions from 'redux/actions/recipe.actions';
import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import styles from './AddRecipeView.module.scss';

const AddRecipeView = ({ addRecipe }) => (
  <>
    <Container className={styles.formContainer}>
      <AddRecipeForm addRecipe={addRecipe} />
    </Container>
  </>
);

const mapDispatchToProps = dispatch => ({
  addRecipe: itemContent => dispatch(recipeActions.addRecipe(itemContent)),
});

export default connect(null, mapDispatchToProps)(AddRecipeView);

AddRecipeView.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};