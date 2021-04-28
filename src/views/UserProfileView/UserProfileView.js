import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import ProfileWrapper from 'components/ProfileWrapper/ProfileWrapper';

const UserProfileView = ({ loggedIn }) => (
  loggedIn ? <ProfileWrapper /> : <Redirect to='/login' />
);

const mapStateToProps = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapStateToProps, null)(UserProfileView);

UserProfileView.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};