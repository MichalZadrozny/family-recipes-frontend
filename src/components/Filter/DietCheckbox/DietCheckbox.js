import React from 'react';
import {PropTypes} from 'prop-types';

const DietCheckbox = ({diet, handleCheckboxChange, label, dietName }) => (
  <>
    <label htmlFor={dietName}>
      {label}
      <input type="checkbox" id={dietName} value={diet} onChange={handleCheckboxChange} />
    </label>
  </>
);


DietCheckbox.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired, 
  diet: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  dietName: PropTypes.string.isRequired,
};

export default DietCheckbox;
