import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import FormModal from 'components/Forms/FormModal/FormModal';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import styles from '../ProfileDropdown.module.scss';

const RegisterDropdownItem = ({ history }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => {
    setModalShow(false);
    history.push('/');
  };
  const form = <RegisterForm close={onHide} />;

  return (
    <>
      <Dropdown.Item
        onClick={() => setModalShow(true)} active={false}
        bsPrefix={styles.dropdownItem}>
        Rejestracja
      </Dropdown.Item>
      <FormModal
        title='Rejestracja'
        show={modalShow}
        onHide={onHide}
        form={form}
      />
    </>
  );
};

export default withRouter(RegisterDropdownItem);

RegisterDropdownItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};