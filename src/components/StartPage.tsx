import React from 'react';
import startPage from "../img/startPage.svg";

const StartPage:React.FC = () => {
    return (
        <main className="start-page info-block">
            <div className="wrapper start-page__content">
                <div className="info-block__img">
                    <img src={startPage} alt="start page img"/>
                </div>
                <p className='info-block__description'>Start with searching a GitHub user</p>
            </div>
        </main>
    );
};

export default StartPage;