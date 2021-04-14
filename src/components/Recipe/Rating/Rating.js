import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const stars = (rating) => {

  const rest = rating % 1;
  const number = rating - rest;

  return (
    <div>
      {
        // eslint-disable-next-line react/no-array-index-key
        [...Array(number)].map((item, index) => <FontAwesomeIcon key={index} icon={faStar} />)
      }
      {
        rest >= 0.5 ? <FontAwesomeIcon icon={faStarHalf} /> : ''
      }
    </div>
  );
};

const Rating = ({ averageRating }) => (
  <>
    {
      averageRating > 0 ? stars(averageRating) : <p>Brak danych</p>
    }
  </>
);

export default Rating;

Rating.propTypes = {
  averageRating: PropTypes.number.isRequired,
};