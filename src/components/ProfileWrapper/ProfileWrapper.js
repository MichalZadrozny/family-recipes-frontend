import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { bool } from 'prop-types';

import recipeActions from 'redux/actions/recipe.actions';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import Filter from '../Filter/Filter';
import styles from './ProfileWrapper.module.scss';

class ProfileWrapper extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getUserRecipePreviews(9999);
  }

  render() {
    const { userRecipes, diet, filterIsVisible } = this.props;

    return (
      <>
        <Filter
          diet={diet}
        />
        <div className={[styles.wrapper, !filterIsVisible ? styles.filterHidden : styles.filterVisible].join(' ')}>
          <p>Ilość dodanych przepisów: {userRecipes.length}</p>
          <RecipePreviewWrapper items={userRecipes} diet={diet} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { userRecipes } = state.recipes;
  const { diet, filterIsVisible } = state.filter;
  return {
    userRecipes,
    diet,
    filterIsVisible,
  };
};

const mapDispatchToProps = dispatch => ({
  getUserRecipePreviews: (userId) => dispatch(recipeActions.getUserRecipePreviews(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWrapper);

ProfileWrapper.propTypes = {
  userRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageName: PropTypes.string,
      name: PropTypes.string,
      diet: PropTypes.string,
      preparationTime: PropTypes.number,
      averageRating: PropTypes.number,
    }),
  ).isRequired,
  getUserRecipePreviews: PropTypes.func.isRequired,
  diet: PropTypes.objectOf(bool).isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};