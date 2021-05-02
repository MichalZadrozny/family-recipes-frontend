import React from 'react';
import { bool, PropTypes } from 'prop-types';

import DietCheckbox from './DietCheckbox/DietCheckbox';
import styles from './DietFilter.module.scss';

const DietFilter = ({ diet }) => (
  <div className={styles.dietBox}>
    <h2 className={styles.filterLabel}>Dieta</h2>
    <DietCheckbox diet={diet.meat} dietName='meat' label='Mięsna' />
    <br />
    <DietCheckbox diet={diet.vegetarian} dietName='vegetarian' label='Wegetariańska' />
    <br />
    <DietCheckbox diet={diet.vegan} dietName='vegan' label='Wegańska' />
  </div>
);

export default DietFilter;

DietFilter.propTypes = {
  diet: PropTypes.objectOf(bool).isRequired,
};