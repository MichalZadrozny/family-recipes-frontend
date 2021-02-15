import React from 'react';
import RecipePreview from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview';
import styles from 'components/RecipePreviewWrapper/RecipePreviewWrapper.module.scss';
import PropTypes from 'prop-types';

const RecipePreviewWrapper = ({ items }) => (
  <ul className={styles.recipePreviewWrapper}>
    {items.map((item) => (
      /* eslint-disable react/jsx-props-no-spreading */
      <RecipePreview key={item.id} {...item} />
    ))}
  </ul>
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
};
