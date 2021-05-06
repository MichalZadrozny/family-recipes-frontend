import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import recipeActions from 'redux/actions/recipe.actions';
import alertActions from 'redux/actions/alert.actions';
import Recipe from 'components/Recipe/Recipe';
import styles from './RecipeView.module.scss';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

class RecipeView extends Component {

  componentDidMount() {
    const { match, getSingleRecipe } = this.props;
    getSingleRecipe(match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { error, history, selectedRecipe, doNotClear } = this.props;

    if (!selectedRecipe && error) {
      doNotClear();
      history.push('/');
    }
  }

  render() {
    const { selectedRecipe } = this.props;

    return (
      <div className={styles.recipeContainer}>
        {
          selectedRecipe ? <Recipe recipe={selectedRecipe} /> : <LoadingSpinner />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedRecipe: state.recipes.selectedRecipe,
  error: state.alert.message,
});

const mapDispatchToProps = dispatch => ({
  getSingleRecipe: id => dispatch(recipeActions.getSingleRecipe(id)),
  doNotClear: () => dispatch(alertActions.doNotClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView);

RecipeView.propTypes = {
  getSingleRecipe: PropTypes.func.isRequired,
  doNotClear: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedRecipe: PropTypes.objectOf(PropTypes.any),
  history: ReactRouterPropTypes.history.isRequired,
  error: PropTypes.string,
};

RecipeView.defaultProps = {
  selectedRecipe: undefined,
  error: undefined,
};