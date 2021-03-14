import React from 'react';
import RecipePreview from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview';
import styles from 'components/RecipePreviewWrapper/RecipePreviewWrapper.module.scss';
import PropTypes, { bool } from 'prop-types';
import Row from 'react-bootstrap/Row';

const RecipePreviewWrapper = ({ items, diet }) => (
  <Row className={styles.recipePreviewWrapper}>
    {
      diet.meat === false && diet.vegetarian === false && diet.vegan === false ?
        items.map((item) => (
          /* eslint-disable react/jsx-props-no-spreading */
          <RecipePreview key={item.id} {...item} />
        ))
        :
        items.filter(item => diet[item.diet.toLowerCase()]).map((item) => (
          /* eslint-disable react/jsx-props-no-spreading */
          <RecipePreview key={item.id} {...item} />
        ))}
  </Row>
);

export default RecipePreviewWrapper;

RecipePreviewWrapper.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      diet: PropTypes.string,
      time: PropTypes.number,
    }),
  ).isRequired,
  diet: PropTypes.objectOf(bool).isRequired,
};
