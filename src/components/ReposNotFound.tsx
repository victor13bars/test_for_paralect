import React from 'react';
import reposEmpty from '../img/reposEmpty.svg'

const ReposNotFound: React.FC = () => {
    return (
        <main className="repos-empty info-block">
            <div className="wrapper repos-empty__content">
                <div className="info-block__img">
                    <img src={reposEmpty} alt="repository not found"/>
                </div>
                <p className='info-block__description'>Repository list is empty</p>
            </div>
        </main>
    );
};

export default ReposNotFound;