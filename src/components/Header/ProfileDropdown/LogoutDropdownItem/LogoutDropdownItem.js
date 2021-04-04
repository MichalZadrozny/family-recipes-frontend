import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';

import userActions from 'redux/actions/user.actions';
import styles from './LogoutDropdownItem.module.scss';

const LoginDropdownItem = ({ history, logout }) => (
  <>
    <Dropdown.Item
      onClick={() => {
        logout();
        history.push('/');
      }}
      bsPrefix={styles.dropdownItem}>
      Wyloguj
    </Dropdown.Item>
  </>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(userActions.logout()),
});

export default compose(withRouter, connect(null, mapDispatchToProps))(LoginDropdownItem);

LoginDropdownItem.propTypes = {
  logout: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};