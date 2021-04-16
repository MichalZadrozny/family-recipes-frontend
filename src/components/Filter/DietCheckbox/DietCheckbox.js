import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { handleCheckboxChange as checkboxChange } from 'redux/actions/filter.actions';

const DietCheckbox = ({ diet, handleCheckboxChange, label, dietName }) => (
  <>
    <label htmlFor={dietName}>
      {`${label}: `}
      <input type='checkbox' id={dietName} checked={diet} onChange={handleCheckboxChange} />
    </label>
  </>
);

DietCheckbox.propTypes = {
  handleCheckboxChange: PropTypes.func.isRequired,
  diet: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  dietName: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleCheckboxChange: event => dispatch(checkboxChange(event)),
});

export default connect(null, mapDispatchToProps)(DietCheckbox);