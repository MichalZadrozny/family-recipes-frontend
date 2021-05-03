import React from 'react';
import { bool, PropTypes } from 'prop-types';

import DietCheckbox from './DietCheckbox/DietCheckbox';
import styles from './DietFilter.module.scss';

const DietFilter = ({ diet }) => (
  <div className={styles.dietWrapper}>
    <h2>Dieta</h2>
    <div className={styles.dietBox}>
      <DietCheckbox diet={diet.meat} dietName='meat' label='Mięsna' />
      <br />
      <DietCheckbox diet={diet.vegetarian} dietName='vegetarian' label='Wegetariańska' />
      <br />
      <DietCheckbox diet={diet.vegan} dietName='vegan' label='Wegańska' />
    </div>
  </div>
);

export default DietFilter;

DietFilter.propTypes = {
  diet: PropTypes.objectOf(bool).isRequired,
};