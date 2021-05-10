import React from 'react';
import PropTypes from 'prop-types';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import appConstants from 'constants/app.constants';
import DietIcon from 'components/Icon/DietIcon/DietIcon';
import styles from './Recipe.module.scss';
import Rating from './Rating/Rating';
import AlertToast from '../AlertToast/AlertToast';

const Recipe = ({ recipe }) => (
  <div className={styles.recipeContainer}>
    <h1 className={styles.recipeName}>{recipe.name}</h1>

    {
      recipe.imageName ?
        <div>
          <img src={appConstants.MEDIA_URL + recipe.imageName} alt={recipe.name} className={styles.image} />
        </div> : ''
    }

    <AlertToast />
    <div className={[styles.info, styles.segment].join(' ')}>
      <Row>
        <Col className={styles.infoRating} xs={12} md={4}>
          <OverlayTrigger placement='top' overlay={<Tooltip>Tooltip</Tooltip>}>
            <Rating averageRating={recipe.averageRating} numberOfRatings={recipe.numberOfRatings} />
          </OverlayTrigger>
        </Col>
        <Col className={styles.infoCol} xs={6} md={4}>
          <p>Czas: {recipe.preparationTime} min</p>
        </Col>
        <Col className={styles.infoCol} xs={6} md={4}>
          <DietIcon diet={recipe.diet} />
          <span className={styles.dietLabel}>Wegetariańska</span>
        </Col>
      </Row>

      {
        recipe.nutrients ?
          <Row className={styles.nutrients}>
            <Col xs={6} md={3}>
              <span className={styles.nutrientsName}>Kalorie</span>
              <p>{recipe.nutrients.calories}</p>
            </Col>
            <Col xs={6} md={3}>
              <span className={styles.nutrientsName}>Białka</span>
              <p>{recipe.nutrients.proteins}</p>
            </Col>
            <Col xs={6} md={3}>
              <span className={styles.nutrientsName}>Tłuszcze</span>
              <p>{recipe.nutrients.fats}</p>
            </Col>
            <Col xs={6} md={3}>
              <span className={[styles.nutrientsName, styles.carbsLong].join(' ')}>Węglowodany</span>
              <span className={[styles.nutrientsName, styles.carbsShort].join(' ')}>Węgl.</span>
              <p>{recipe.nutrients.carbs}</p></Col>
          </Row> : ''
      }

      <p>Autor: {recipe.username}</p>
    </div>

    <div className={[styles.segment, styles.description].join(' ')}>
      <h3>Opis:</h3>
      <p>{recipe.description}</p>
    </div>

    <Row className={styles.lists}>
      <Col md='auto' xs={12} lg={5} className={styles.segment}>
        <h3>Składniki:</h3>
        <ul>
          {
            // eslint-disable-next-line react/prop-types
            recipe.ingredients.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <div className={styles.ingredient}>
                  <p className={styles.ingredientName}>
                    {`${item.amount}  `}

                    {
                      item.unit ? `${item.unit}  ` : ''
                    }
                    {item.name}
                  </p>


                </div>
              </li>
            ))
          }
        </ul>
      </Col>
      <Col xs={12} lg={5} className={[styles.segment, styles.steps].join(' ')}>
        <h3>Kroki do wykonania:</h3>
        <ol>
          {
            // eslint-disable-next-line react/prop-types
            recipe.steps.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <p>{item}</p>
              </li>
            ))
          }
        </ol>
      </Col>
    </Row>

  </div>
);

export default Recipe;

Recipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageName: PropTypes.string,
    id: PropTypes.number.isRequired,
    diet: PropTypes.string.isRequired,
    preparationTime: PropTypes.number.isRequired,
    averageRating: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.object),

    nutrients: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.number,
      calories: PropTypes.number,
      proteins: PropTypes.number,
      carbs: PropTypes.number,
      fats: PropTypes.number,
    })),

    calories: PropTypes.number,
    proteins: PropTypes.number,
    carbs: PropTypes.number,
    fats: PropTypes.number,

  })).isRequired,
};


