import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import styles from './ProfileDropdown.module.scss';
import LoginDropdownItem from './LoginDropdownItem/LoginDropdownItem';
import LogoutDropdownItem from './LogoutDropdownItem/LogoutDropdownItem';

const ProfileDropdown = ({ loggedIn }) => (
  <Dropdown>
    <Dropdown.Toggle as='div' className={styles.toggle}>
      <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {
        loggedIn ?
          <>
            <Dropdown.Item as={NavLink} to='/user' bsPrefix={styles.dropdownItem}>
              Profile
            </Dropdown.Item>
            <LogoutDropdownItem />
          </>
          : <LoginDropdownItem />
      }
    </Dropdown.Menu>
  </Dropdown>
);

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps, null)(ProfileDropdown);

ProfileDropdown.propTypes = {
  loggedIn: PropTypes.bool,
};

ProfileDropdown.defaultProps = {
  loggedIn: false,
};