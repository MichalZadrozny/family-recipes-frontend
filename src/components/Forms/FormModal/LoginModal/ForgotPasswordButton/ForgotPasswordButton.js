import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userActions from 'redux/actions/user.actions';

const handleKeyDown = (e, togglePasswordRecovery) => {
  if (e.key === 'Enter') {
    togglePasswordRecovery();
  }
};

const ForgotPasswordButton = ({ text, togglePasswordRecovery }) => (
  <div tabIndex={0} role='button' onClick={() => togglePasswordRecovery()}
       onKeyDown={(e) => handleKeyDown(e, togglePasswordRecovery)}>
    <p>{text}</p>
  </div>
);

const mapDispatchToProps = dispatch => ({
  togglePasswordRecovery: () => dispatch(userActions.togglePasswordRecovery()),
});

export default connect(null, mapDispatchToProps)(ForgotPasswordButton);

ForgotPasswordButton.propTypes = {
  text: PropTypes.string.isRequired,
  togglePasswordRecovery: PropTypes.func.isRequired,
};