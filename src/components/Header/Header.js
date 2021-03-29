import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';

const Header = () => (
  <nav className={styles.header}>
    <NavLink to='/'>
      <Logo />
    </NavLink>
    <div className={styles.headerNav}>
      <NavLink to='/add-recipe'>
        Add Recipe
      </NavLink>
      <ProfileDropdown />
    </div>
  </nav>
);

export default Header;