import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import appConstants from 'constants/app.constants';
import RecipePreview from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview';
import styles from 'components/RecipePreviewWrapper/RecipePreviewWrapper.module.scss';

const filterItems = (items, diet, maxTime) => {

  let filteredItems = items;

  if (!(diet.meat === false && diet.vegetarian === false && diet.vegan === false)) {
    filteredItems = items.filter(item => diet[item.diet.toLowerCase()]);
  }

  filteredItems = maxTime >= 0 ? filteredItems.filter(item => item.preparationTime <= maxTime) : filteredItems;

  return filteredItems;
};

const printItems = items => (
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
);

const RecipePreviewWrapper = ({ items, diet, maxTime }) => (
  <Row className={styles.recipePreviewWrapper}>
    {
      printItems(filterItems(items, diet, maxTime))
    }
  </Row>
);

const mapStateToProps = ({ filter }) => ({
  maxTime: filter.maxTime,
});

export default connect(mapStateToProps, null)(RecipePreviewWrapper);

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
  maxTime: PropTypes.number.isRequired,
};
