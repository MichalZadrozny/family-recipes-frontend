import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

import Logo from './Logo/Logo';

const Header = () => (
  <nav className={styles.header}>
    <NavLink to='/'>
      <Logo />
    </NavLink>
    <div className={styles.headerNav}>
      <NavLink to='/add-recipe'>
        Add Recipe
      </NavLink>
      <NavLink to='/user'>
        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
      </NavLink>
    </div>
  </nav>
);

export default Header;