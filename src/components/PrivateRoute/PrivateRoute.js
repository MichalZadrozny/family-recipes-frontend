import React from 'react';
import { Route } from 'react-router-dom';
import LoginModal from '../Header/ProfileDropdown/LoginDropdownItem/LoginModal/LoginModal';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <Route {...rest} render={props => (
      localStorage.getItem('user')
        ? <Component {...props} />
        : <LoginModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    )} />
  );
};

export default PrivateRoute;