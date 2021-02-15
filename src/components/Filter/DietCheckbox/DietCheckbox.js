import React from 'react';
import {PropTypes, bool} from 'prop-types';

const DietCheckbox = ({diet, handleCheckboxChange }) => (
  <>
    <label htmlFor="meat">
      Mięsna
      <input type="checkbox" id="meat" value={diet.meat} onChange={handleCheckboxChange} />
    </label>
  </>
);


DietCheckbox.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired, 
  diet: PropTypes.arrayOf(bool).isRequired,
};

export default DietCheckbox;
