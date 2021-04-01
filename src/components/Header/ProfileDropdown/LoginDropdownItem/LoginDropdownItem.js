import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import styles from './LoginDropdownItem.module.scss';
import LoginModal from './LoginModal/LoginModal';


const LoginDropdownItem = ({ history }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Dropdown.Item
        onClick={() => setModalShow(true)} active={false}
        bsPrefix={styles.dropdownItem}>
        Login
      </Dropdown.Item>

      <LoginModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          history.push('/');
        }}
      />
    </>
  );
};

export default withRouter(LoginDropdownItem);

LoginDropdownItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};