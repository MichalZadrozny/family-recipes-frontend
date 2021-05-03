import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { bool } from 'prop-types';

import recipeActions from 'redux/actions/recipe.actions';
import alertActions from 'redux/actions/alert.actions';
import RecipePreviewWrapper from 'components/RecipePreviewWrapper/RecipePreviewWrapper';
import Filter from 'components/Filter/Filter';
import AlertToast from 'components/AlertToast/AlertToast';
import styles from './MainWrapper.module.scss';

class MainWrapper extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getRecipePreviews();
  }

  componentWillUnmount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.clear();
  };

  render() {
    const { items, diet, filterIsVisible } = this.props;

    return (
      <>
        <Filter
          diet={diet}
        />
        <div className={[styles.wrapper, !filterIsVisible ? styles.filterHidden : styles.filterVisible].join(' ')}>
          <AlertToast />
          <RecipePreviewWrapper items={items} diet={diet} />
        </div>
      </>
    );
  }
}


const mapStateToProps = (state) => {
  const { items } = state.recipes;
  const { diet, filterIsVisible } = state.filter;
  return {
    items,
    diet,
    filterIsVisible,
  };
};

const mapDispatchToProps = dispatch => ({
  getRecipePreviews: () => dispatch(recipeActions.getRecipePreviews()),
  clear: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper);


MainWrapper.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageName: PropTypes.string,
      name: PropTypes.string,
      diet: PropTypes.string,
      preparationTime: PropTypes.number,
      averageRating: PropTypes.number,
    }),
  ).isRequired,
  getRecipePreviews: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  diet: PropTypes.objectOf(bool).isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};