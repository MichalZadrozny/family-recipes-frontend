import { faDrumstickBite, faEgg, faLeaf } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const DietIcon = ({ diet }) => (
  <>
    {diet === 'MEAT' && <Icon icon={faDrumstickBite} tooltip='Mięsna' />}
    {diet === 'VEGETARIAN' && <Icon icon={faEgg} tooltip='Wegetariańska' />}
    {diet === 'VEGAN' && <Icon icon={faLeaf} tooltip='Wegańska' />}
  </>
);

export default DietIcon;

DietIcon.propTypes = {
  diet: PropTypes.string.isRequired,
};