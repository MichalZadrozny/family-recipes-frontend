import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import FormModal from 'components/Forms/FormModal/FormModal';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import styles from '../ProfileDropdown.module.scss';

const LoginDropdownItem = ({ history }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
    history.push('/');
  };
  const form = <LoginForm close={onHide} />;

  return (
    <>
      <Dropdown.Item
        onClick={() => setModalShow(true)}
        bsPrefix={styles.dropdownItem}>
        Logowanie
      </Dropdown.Item>

      <FormModal
        title='Logowanie'
        show={modalShow}
        onHide={onHide}
        form={form}
      />
    </>
  );
};

export default withRouter(LoginDropdownItem);

LoginDropdownItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};