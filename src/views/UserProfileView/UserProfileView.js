import React from 'react';
import { Redirect } from 'react-router-dom';

import ProfileMenu from 'components/ProfileMenu/ProfileMenu';

const UserProfileView = () => localStorage.getItem('user') ? <ProfileMenu /> : <Redirect to='/login' />;

export default UserProfileView;