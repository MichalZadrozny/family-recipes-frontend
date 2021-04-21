import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import NutrientInput from './NutrientInput/NutrientInput';

const NutrientsFormPart = ({ values, errors, touched, handleChange, handleBlur }) => (
  <Form.Row className='align-items-center'>
    <Col xs={6} md={3}>
      <Form.Label>Kalorie</Form.Label>
      <NutrientInput name='calories' type='number' placeholder='Kalorie' nutrients={values.nutrients.calories}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
    <Col xs={6} md={3}>
      <Form.Label>Białka</Form.Label>
      <NutrientInput name='proteins' type='number' placeholder='Białka' nutrients={values.nutrients.proteins}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
    <Col xs={6} md={3}>
      <Form.Label>Tłuszcze</Form.Label>
      <NutrientInput name='fats' type='number' placeholder='Tłuszcze' nutrients={values.nutrients.fats}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
    <Col xs={6} md={3}>
      <Form.Label>Węglowodany</Form.Label>
      <NutrientInput name='carbs' type='number' placeholder='Węglowodany' nutrients={values.nutrients.carbs}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
  </Form.Row>
);

export default NutrientsFormPart;

NutrientsFormPart.propTypes = {
  values: PropTypes.objectOf(PropTypes.any),
  errors: PropTypes.objectOf(PropTypes.any),
  touched: PropTypes.objectOf(PropTypes.any),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

NutrientsFormPart.defaultProps = {
  values: {},
  errors: {},
  touched: {},
};