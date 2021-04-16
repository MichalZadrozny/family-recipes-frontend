import React from 'react';
import logo from 'assets/img/logo.png';
import styles from './Logo.module.scss';

const Logo = () => (
  <div>
    <img src={logo} alt='logo' className={styles.logo} />
  </div>
);

export default Logo;
