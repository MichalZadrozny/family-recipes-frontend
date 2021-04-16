import React, { Component } from 'react';
import PropTypes, { bool } from 'prop-types';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import recipeActions from 'redux/actions/recipe.actions';

import appConstants from 'constants/app.constants';
import RecipePreview from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview';
import styles from 'components/RecipePreviewWrapper/RecipePreviewWrapper.module.scss';
import AlertToast from 'components/AlertToast/AlertToast';

class RecipePreviewWrapper extends Component {

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.getRecipePreviews();
  }

  render() {
    const { items, diet, filterIsVisible } = this.props;

    return (
      <div className={[styles.mainWrapper, !filterIsVisible ? styles.filterHidden : styles.filterVisible].join(' ')}>

        <AlertToast />
        <Row className={styles.recipePreviewWrapper}>
          {
            diet.meat === false && diet.vegetarian === false && diet.vegan === false ?
              items.map((item) => (
                <RecipePreview
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  preparationTime={item.preparationTime}
                  diet={item.diet}
                  averageRating={item.averageRating}
                  imageName={item.imageName === null ? undefined : (appConstants.MEDIA_URL + item.imageName)}
                />
              ))
              :
              items.filter(item => diet[item.diet.toLowerCase()]).map((item) => (
                /* eslint-disable react/jsx-props-no-spreading */
                <RecipePreview
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  preparationTime={item.preparationTime}
                  diet={item.diet}
                  averageRating={item.averageRating}
                  imageName={item.imageName === null ? undefined : (appConstants.MEDIA_URL + item.imageName)}
                />
              ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ filter }) => ({
  filterIsVisible: filter.filterIsVisible,
});

const mapDispatchToProps = dispatch => ({
  getRecipePreviews: () => dispatch(recipeActions.getRecipePreviews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePreviewWrapper);

RecipePreviewWrapper.propTypes = {
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
  diet: PropTypes.objectOf(bool).isRequired,
  getRecipePreviews: PropTypes.func.isRequired,
  filterIsVisible: PropTypes.bool.isRequired,
};
