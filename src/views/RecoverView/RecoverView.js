import React from 'react';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import MainView from 'views/MainView/MainView';
import FormModal from 'components/Forms/FormModal/FormModal';
import RecoverForm from 'components/Forms/RecoverForm/RecoverForm';

const RecoverView = ({ history }) => {
  const [modalShow, setModalShow] = React.useState(true);
  const onHide = () => {
    setModalShow(false);
    history.push('/');
  };
  const form = <RecoverForm close={onHide} />;

  return (
    <>
      <FormModal
        title='Odzyskiwanie hasła'
        show={modalShow}
        onHide={onHide}
        form={form}
      />
      <MainView />
    </>
  );
};

export default withRouter(RecoverView);

RecoverView.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};