import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './ProfileDropdown.module.scss';
import LoginDropdownItem from './LoginDropdownItem/LoginDropdownItem';
import LogoutDropdownItem from './LogoutDropdownItem/LogoutDropdownItem';


const ProfileDropdown = () => (
    <Dropdown>
      <Dropdown.Toggle as='div' className={styles.toggle}>
        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {
          localStorage.getItem('user') ?
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
  )
;

export default ProfileDropdown;