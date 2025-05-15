import React from 'react';

function WelcomeBanner() {
    return (
        <div className={"p-5 bg-gradient-to-br from-blue-600 via-indigo-900 to-pink-400 rounded-2xl"}>
            <h2 className={"font-bold text-2xl text-white"}>Chào mừng bạn đến với Học thông minh</h2>
            <p className={"text-white"}>Khám phá giới hạn của bản thân</p>
        </div>
    );
}

export default WelcomeBanner;