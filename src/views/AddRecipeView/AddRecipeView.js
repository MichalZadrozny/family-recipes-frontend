import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addRecipe as addRecipeAction } from 'redux/actions/recipe.actions';
import { PropTypes } from 'prop-types';

import styles from './AddRecipeView.module.scss';
import AddRecipeForm from '../../components/AddRecipeForm/AddRecipeForm';

const AddRecipeView = ({ addRecipe }) => (
  <>
    <Container className={styles.formContainer}>
      <AddRecipeForm addRecipe={addRecipe} />
    </Container>
  </>
);

const mapDispatchToProps = dispatch => ({
  addRecipe: itemContent => dispatch(addRecipeAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(AddRecipeView);

AddRecipeView.propTypes = {
  addRecipe: PropTypes.func.isRequired,
};