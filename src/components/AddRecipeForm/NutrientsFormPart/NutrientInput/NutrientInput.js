import { Form } from 'react-bootstrap';
import React from 'react';
import styles from 'components/AddRecipeForm/AddRecipeForm.module.scss';
import PropTypes from 'prop-types';

const NutrientInput = ({ name, placeholder, nutrients, errors, touched, handleChange, handleBlur }) => (
  <>
    <Form.Control
      type='number'
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      value={nutrients}
      name={`nutrients.${name}`}
      className={(touched && touched[name]) && (errors && errors[name]) ? styles.error : null} />

    {(touched && touched[name]) && (errors && errors[name]) ? (
      <div className={styles.errorMessage}>{errors[name]}</div>
    ) : null}
  </>
);

export default NutrientInput;

NutrientInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  nutrients: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

NutrientInput.defaultProps = {
  nutrients: '',
  errors: {},
  touched: {},
};