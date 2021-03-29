import React from 'react';
import { Dropdown } from 'react-bootstrap';

import styles from './LoginDropdownItem.module.scss';
import LoginModal from './LoginModal/LoginModal';


const LoginDropdownItem = () => {
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
        onHide={() => setModalShow(false)}
      />
    </>
  );
};


export default LoginDropdownItem;