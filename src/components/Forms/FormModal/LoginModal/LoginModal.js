import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormModal from 'components/Forms/FormModal/FormModal';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import PasswordRecoveryForm from 'components/Forms/PasswordRecoveryForm/PasswordRecoveryForm';

const LoginModal = ({ modalShow, onHide, passwordRecovery }) => {
  const loginForm = <LoginForm close={onHide} />;
  const recoveryForm = <PasswordRecoveryForm close={onHide} />;

  return (
    <FormModal
      title={passwordRecovery ? 'Odzyskiwanie hasła' : 'Logowanie'}
      show={modalShow}
      onHide={onHide}
      form={passwordRecovery ? recoveryForm : loginForm}
    />
  );
};

const mapStateToProps = ({ authentication }) => {
  const { passwordRecovery } = authentication;
  return { passwordRecovery };
};

export default connect(mapStateToProps, null)(LoginModal);


LoginModal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  passwordRecovery: PropTypes.bool,
};

LoginModal.defaultProps = {
  passwordRecovery: false,
};
