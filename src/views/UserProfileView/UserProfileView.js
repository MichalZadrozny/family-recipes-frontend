import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import ProfileMenu from 'components/ProfileMenu/ProfileMenu';

const UserProfileView = ({ loggedIn }) => (
  loggedIn ? <ProfileMenu /> : <Redirect to='/login' />
);

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps, null)(UserProfileView);

UserProfileView.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};