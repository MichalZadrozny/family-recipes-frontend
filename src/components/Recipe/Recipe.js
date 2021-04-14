import React from 'react';
import PropTypes from 'prop-types';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import appConstants from 'constants/app.constants';
import DietIcon from 'components/Icon/DietIcon/DietIcon';
import styles from './Recipe.module.scss';
import Rating from './Rating/Rating';

const Recipe = ({ recipe }) => (
  <div className={styles.recipeContainer}>
    <h1>{recipe.name}</h1>

    {
      recipe.imageName ?
        <div className={styles.imageBox}>
          <img src={appConstants.MEDIA_URL + recipe.imageName} alt={recipe.name} className={styles.image} />
        </div> : ''
    }

    <div className={styles.info}>
      <div className={styles.details}>
        <div>
          <OverlayTrigger placement='top' overlay={<Tooltip>Tooltip</Tooltip>}>
            <>
              <Rating averageRating={recipe.averageRating} />
              <p>{recipe.numberOfRatings}</p>
            </>
          </OverlayTrigger>
        </div>
        <p>Czas: {recipe.preparationTime} min</p>
        <DietIcon diet={recipe.diet} />
      </div>

      {
        recipe.nutrients ?
          <div className={styles.nutrients}>
            <p><span className={styles.nutrientsName}>Kalorie: </span>{recipe.nutrients.calories}</p>
            <p><span className={styles.nutrientsName}>Białka: </span>{recipe.nutrients.proteins}</p>
            <p><span className={styles.nutrientsName}>Tłuszcze: </span>{recipe.nutrients.fats}</p>
            <p><span className={styles.nutrientsName}>Węglowodany: </span>{recipe.nutrients.carbs}</p>
          </div> : ''
      }

      <p>Autor: {recipe.username}</p>
    </div>

    <p>{recipe.description}</p>


    <Row className={styles.lists}>
      <Col xs={6}>
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
      <Col md='auto' xs={4}>
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


