import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/RecipePreviewWrapper/RecipePreview/RecipePreview.module.scss';
import Col from 'react-bootstrap/Col';
import DietIcon from 'components/RecipePreviewWrapper/RecipePreview/DietIcon/DietIcon';
import { faDrumstickBite, faEgg, faLeaf } from '@fortawesome/free-solid-svg-icons';
import RecipeRating from './RecipeRating/RecipeRating';

const RecipePreview = ({ image, name, diet, time }) => (
  <Col className={styles.recipePreview}>
    <div className={styles.imageBox}>
      <img src={image} alt={name} className={styles.image} />
    </div>
    <div className={styles.info}>
      <div className={styles.details}>
        <Col className={[styles.diet, styles.detailsColumn].join(' ')} xs={3}>
          {diet === 'MEAT' && <DietIcon icon={faDrumstickBite} tooltip='Mięsna' />}
          {diet === 'VEGETARIAN' && <DietIcon icon={faEgg} tooltip='Wegetariańska' />}
          {diet === 'VEGAN' && <DietIcon icon={faLeaf} tooltip='Wegańska' />}
        </Col>
        <Col className={styles.detailsColumn} xs={5}>
          <p>{time} min</p>
        </Col>
        <Col className={styles.detailsColumn} xs={4}>
          <RecipeRating rating={4.5} />
        </Col>
      </div>
      <p className={styles.recipeName}>{name}</p>
    </div>
  </Col>
);


RecipePreview.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

RecipePreview.defaultProps = {
  image: '/src/assets/img/image-not-found.png',
};

export default RecipePreview;
