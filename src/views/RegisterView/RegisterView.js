import React from 'react';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import MainView from 'views/MainView/MainView';
import FormModal from 'components/Forms/FormModal/FormModal';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';

const RegisterView = ({ history }) => {
  const [modalShow, setModalShow] = React.useState(true);
  const onHide = () => {
    setModalShow(false);
    history.push('/');
  };
  const form = <RegisterForm close={onHide} />;

  return (
    <>
      <FormModal
        title='Zarejetruj'
        show={modalShow}
        onHide={onHide}
        form={form}
      />
      <MainView />
    </>
  );
};

export default withRouter(RegisterView);

RegisterView.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};