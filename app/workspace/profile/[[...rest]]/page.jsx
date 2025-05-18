import React from 'react';
import {UserProfile} from "@clerk/nextjs";

function Profile() {
    return (
        <div>
            <h2 className={'font-bold text-3xl mb-7'}>Quản lý hồ sơ cá nhân</h2>
            <UserProfile />
        </div>
    );
}

export default Profile;