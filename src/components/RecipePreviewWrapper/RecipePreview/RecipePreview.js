import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview.module.scss';
import Col from 'react-bootstrap/Col';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router';

import imageNotFound from 'assets/img/image-not-found.png';
import DietIcon from 'components/Icon/DietIcon/DietIcon';
import RecipeRating from './RecipeRating/RecipeRating';

const RecipePreview = ({ imageName, name, diet, preparationTime, averageRating, history, id }) => (
  <Col className={styles.recipePreview} onClick={() => history.push(`/recipe/${id}`)}>
    <div className={styles.imageBox}>
      <div className={styles.shadow} />
      <img src={imageName} alt={name} className={styles.image} />
    </div>

    <div className={styles.info}>
      <div className={styles.details}>
        <Col className={[styles.diet, styles.detailsColumn].join(' ')} xs={3}>
          <DietIcon diet={diet} />
        </Col>

        <Col className={styles.detailsColumn} xs={5}>
          <p>{preparationTime} min</p>
        </Col>

        <Col className={styles.detailsColumn} xs={4}>
          <RecipeRating averageRating={averageRating} />
        </Col>
      </div>
      <p className={styles.recipeName}>{name}</p>
    </div>
  </Col>
);


RecipePreview.propTypes = {
  imageName: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  preparationTime: PropTypes.number.isRequired,
  averageRating: PropTypes.number.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

RecipePreview.defaultProps = {
  imageName: imageNotFound,
};

export default withRouter(RecipePreview);
