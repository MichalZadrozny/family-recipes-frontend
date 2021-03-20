import { Form, InputGroup, Row } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';

import styles from '../AddRecipeForm.module.scss';

const StepInput = ({ index, steps, handleChange, handleBlur }) => (
  <Row className={styles.step}>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>
          {index}
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control type='text' placeholder={`${index}  krok`} value={steps[index]} name={`steps.${index}`}
                    onChange={handleChange} onBlur={handleBlur} />
    </InputGroup>
  </Row>
);

export default StepInput;

StepInput.propTypes = {
  index: PropTypes.string.isRequired,
  steps: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
