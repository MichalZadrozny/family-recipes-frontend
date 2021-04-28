import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Row } from 'react-bootstrap';

import appConstants from 'constants/app.constants';
import RecipePreview from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview';
import styles from 'components/RecipePreviewWrapper/RecipePreviewWrapper.module.scss';

const RecipePreviewWrapper = ({ items, diet }) => (
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
);

export default RecipePreviewWrapper;

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
};
