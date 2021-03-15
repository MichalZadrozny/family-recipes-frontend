import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

import Logo from './Logo/Logo';

const Header = () => (
  <div className={styles.header}>
    <Logo />
    <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
  </div>
);

export default Header;