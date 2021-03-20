import { Form, InputGroup } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

const IngredientInput = ({ index, ingredient, handleChange, handleBlur }) => (
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>
        {index + 1}
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      type='text'
      placeholder='Ilość'
      value={ingredient.amount}
      name={`ingredients.${index}.amount`}
      onChange={handleChange}
      onBlur={handleBlur} />
    <Form.Control
      type='text'
      placeholder='Jednostka (może być puste)'
      value={ingredient.unit}
      name={`ingredients.${index}.unit`}
      onChange={handleChange}
      onBlur={handleBlur} />
    <Form.Control
      type='text'
      placeholder='Składnik'
      value={ingredient.name}
      name={`ingredients.${index}.name`}
      onChange={handleChange}
      onBlur={handleBlur} />
  </InputGroup>
);

export default IngredientInput;

IngredientInput.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
