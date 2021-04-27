import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import recipeActions from 'redux/actions/recipe.actions';
import styles from './Rating.module.scss';


const Rating = ({ averageRating, addRating, recipeId }) => {

  const rest = averageRating % 1;
  const number = averageRating - rest;

  return (
    <div className={styles.rating}>
      <div className={styles.ratingStars}>

        {
          (averageRating > 0) ?
            [...Array(number)].map((item, index) =>
              <FontAwesomeIcon key={index} icon={faStar} />)
            :
            [...Array(5)].map((item, index) =>
              <FontAwesomeIcon key={index} icon={faStar} className={styles.disabledStar} />)
        }
        {
          rest >= 0.5 ? <FontAwesomeIcon icon={faStarHalf} /> : ''
        }
      </div>

      <div className={styles.ratingSelect}>
        <div className={styles.starWrapper}>
          {
            [...Array(5)].map((item, index) =>
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={styles.rearStar}
                onClick={() => addRating(9999, recipeId, 5 - index)}
              />,
            )
          }
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  const recipeId = state.recipes.selectedRecipe.id;
  return { recipeId };
};

const mapDispatchToProps = dispatch => ({
  addRating: (userId, recipeId, newRating) => dispatch(recipeActions.addRating(userId, recipeId, newRating)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);

Rating.propTypes = {
  averageRating: PropTypes.number.isRequired,
  addRating: PropTypes.func.isRequired,
  recipeId: PropTypes.number.isRequired,
};