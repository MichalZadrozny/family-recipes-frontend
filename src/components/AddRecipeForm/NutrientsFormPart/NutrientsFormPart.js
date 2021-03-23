import React from 'react';
import { Col, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import NutrientInput from '../NutrientInput/NutrientInput';

const NutrientsFormPart = ({ values, errors, touched, handleChange, handleBlur }) => (
  <Form.Row className='align-items-center'>
    <Col>
      <Form.Label>Kalorie</Form.Label>
      <NutrientInput name='calories' placeholder='Kalorie' nutrients={values.nutrients.calories}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
    <Col>
      <Form.Label>Białka</Form.Label>
      <NutrientInput name='proteins' placeholder='Białka' nutrients={values.nutrients.proteins}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
    <Col>
      <Form.Label>Tłuszcze</Form.Label>
      <NutrientInput name='fats' placeholder='Tłuszcze' nutrients={values.nutrients.fats}
                     errors={errors.nutrients} touched={touched.nutrients} handleChange={handleChange}
                     handleBlur={handleBlur} />
    </Col>
    <Col>
      <Form.Label>Węglowodany</Form.Label>
      <NutrientInput name='carbs' placeholder='Węglowodany' nutrients={values.nutrients.carbs}
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