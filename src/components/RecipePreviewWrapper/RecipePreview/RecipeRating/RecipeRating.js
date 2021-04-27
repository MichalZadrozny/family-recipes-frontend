import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/RecipePreviewWrapper/RecipePreview/RecipeRating/RecipeRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const RecipeRating = ({ averageRating }) => (
  <div className={styles.rating}>
    {
      averageRating > 0 ?
        <>
          <FontAwesomeIcon icon={faStar} className={styles.ratingIcon} />
          <span>{averageRating.toFixed(1)}</span>
        </>
        :
        <>
          <OverlayTrigger overlay={<Tooltip id='tooltip'>Brak ocen</Tooltip>}>
            <div>
              <FontAwesomeIcon icon={faStar} className={styles.ratingIconDisabled} />
              <span className={styles.ratingDisabled}>{averageRating}</span>
            </div>
          </OverlayTrigger>
        </>
    }
  </div>
);

RecipeRating.propTypes = {
  averageRating: PropTypes.number.isRequired,
};

export default RecipeRating;