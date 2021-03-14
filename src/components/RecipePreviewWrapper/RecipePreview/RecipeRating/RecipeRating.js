import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/RecipePreviewWrapper/RecipePreview/RecipeRating/RecipeRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RecipeRating = ({rating}) => (
  <div className={styles.rating}>
    <FontAwesomeIcon icon={faStar} className={styles.ratingIcon}/>
    <span>{rating}</span>
  </div>
);


RecipeRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default RecipeRating;