import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginModal from 'components/Forms/FormModal/LoginModal/LoginModal';
import userActions from 'redux/actions/user.actions';
import styles from '../ProfileDropdown.module.scss';

const LoginDropdownItem = ({ setPasswordRecoveryToFalse }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
    setPasswordRecoveryToFalse();
  };

  return (
    <>
      <Dropdown.Item
        onClick={() => setModalShow(true)}
        bsPrefix={styles.dropdownItem}>
        Logowanie
      </Dropdown.Item>

      <LoginModal onHide={onHide} modalShow={modalShow} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  setPasswordRecoveryToFalse: () => dispatch(userActions.setPasswordRecoveryToFalse()),
});

export default connect(null, mapDispatchToProps)(LoginDropdownItem);

LoginDropdownItem.propTypes = {
  setPasswordRecoveryToFalse: PropTypes.func.isRequired,
};