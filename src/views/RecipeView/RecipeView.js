import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import recipeActions from 'redux/actions/recipe.actions';
import Recipe from 'components/Recipe/Recipe';
import styles from './RecipeView.module.scss';

class RecipeView extends Component {

  componentDidMount() {
    const { match, getSingleRecipe } = this.props;
    getSingleRecipe(match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { error, history, selectedRecipe } = this.props;

    if (!selectedRecipe && error) {
      history.push('/not-found');
    }
  }

  render() {
    const { selectedRecipe } = this.props;

    return (
      <div className={styles.recipeContainer}>
        {
          selectedRecipe ? <Recipe recipe={selectedRecipe} /> : ''
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedRecipe: state.recipes.selectedRecipe,
  error: state.recipes.error,
});

const mapDispatchToProps = dispatch => ({
  getSingleRecipe: id => dispatch(recipeActions.getSingleRecipe(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);

RecipeView.propTypes = {
  getSingleRecipe: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedRecipe: PropTypes.objectOf(PropTypes.any),
  history: ReactRouterPropTypes.history.isRequired,
  error: PropTypes.string,
};

RecipeView.defaultProps = {
  selectedRecipe: undefined,
  error: undefined,
};