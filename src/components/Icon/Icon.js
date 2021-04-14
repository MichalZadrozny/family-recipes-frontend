import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Icon = ({ icon, tooltip }) => (
  <OverlayTrigger overlay={<Tooltip id='tooltip'>{tooltip}</Tooltip>}>
    <FontAwesomeIcon icon={icon} />
  </OverlayTrigger>
);

Icon.propTypes = {
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default Icon;
