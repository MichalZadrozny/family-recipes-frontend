import React from 'react';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';

import LoginModal from 'components/Header/ProfileDropdown/LoginDropdownItem/LoginModal/LoginModal';

const LoginView = ({ history }) => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <LoginModal
      show={modalShow}
      onHide={() => {
        setModalShow(false);
        history.push('/');
      }}
    />
  );
};

export default withRouter(LoginView);

LoginView.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};