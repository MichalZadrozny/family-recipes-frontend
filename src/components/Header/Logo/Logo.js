import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <FontAwesomeIcon icon={faUtensils} />
    <span className={styles.logoName}>Family Recipes</span>
  </div>
);

export default Logo;
