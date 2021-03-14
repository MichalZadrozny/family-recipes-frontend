import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const DietIcon = ({ icon, tooltip }) => (
  <OverlayTrigger overlay={<Tooltip id='tooltip'>{tooltip}</Tooltip>}>
    <FontAwesomeIcon icon={icon} />
  </OverlayTrigger>
);

DietIcon.propTypes = {
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    icon: PropTypes.array,
  }).isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default DietIcon;
