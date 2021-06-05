import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import recipeActions from 'redux/actions/recipe.actions';
import alertActions from 'redux/actions/alert.actions';
import styles from './Rating.module.scss';

const handleAddRating = (userId, recipeId, index, addRating, error) => {
  if (userId !== undefined) {
    addRating(userId, recipeId, 5 - index);
  } else {
    error(['Nie można dodać oceny', 'Zaloguj się, aby móc ocenić przepis']);
  }
};

const Rating = ({ averageRating, numberOfRatings, addRating, error, clear, recipeId, userId }) => {

  const rest = averageRating % 1;
  const number = averageRating - rest;

  useEffect(() => () => {
    clear();
  }, []);

  return (
    <div className={styles.ratingWrapper}>
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
                  onClick={() => handleAddRating(userId, recipeId, index, addRating, error)}
                />,
              )
            }
          </div>
        </div>
      </div>
      <p className={styles.numberOfRatings}>{numberOfRatings}</p>
    </div>
  );
};


const mapStateToProps = (state) => {
  const recipeId = state.recipes.selectedRecipe.id;
  const { userId } = state.authentication.user || {};

  return { recipeId, userId };
};

const mapDispatchToProps = dispatch => ({
  addRating: (userId, recipeId, newRating) => dispatch(recipeActions.addRating(userId, recipeId, newRating)),
  error: message => dispatch(alertActions.error(message)),
  clear: () => dispatch(alertActions.clear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);

Rating.propTypes = {
  userId: PropTypes.string,
  averageRating: PropTypes.number.isRequired,
  addRating: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  recipeId: PropTypes.number.isRequired,
  numberOfRatings: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  userId: undefined,
};