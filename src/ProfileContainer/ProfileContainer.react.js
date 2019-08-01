import React from 'react';

import './ProfileContainer.css';
import ShowUserProfile from '../ShowUserProfile/ShowUserProfile.react';

const ProfileContainer = () => {

    return (
        <div className='profilecontainer_wrapper'>
            <h2>User Profile</h2>
            <ShowUserProfile></ShowUserProfile>
        </div>
    );

}

export default ProfileContainer;