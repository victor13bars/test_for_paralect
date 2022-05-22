import React from 'react';
import userNotFound from "../img/userNotFound.svg";

const UserNotFound: React.FC = () => {
    return (
        <main className="user-empty info-block">
            <div className="wrapper user-empty__content">
                <div className="info-block__img">
                    <img src={userNotFound} alt="user not found"/>
                </div>
                <p className='info-block__description'>User not found</p>
            </div>
        </main>
    );
};

export default UserNotFound;
