import React from 'react';
import './App.scss'
import Header from "../components/Header";
import Loader from "../components/Loader";
import Content from "../components/Content";
import UserNotFound from "../components/UserNotFound";
import StartPage from "../components/StartPage";
import {useTypedSelector} from "../hooks/useTypedselector";

const App: React.FC = () => {

    const status = useTypedSelector(state => state.app.status)
    const userInfo = useTypedSelector(state => state.user.userInfo)

    if (status === 'loading') {
        return <Loader/>
    }

    return (
        <>
            <Header/>

            {status === 'idle' && <StartPage/>}
            {status === 'failed' && <UserNotFound/>}
            {status === 'succeeded' && userInfo && <Content/>}
        </>
    );
};

export default App;

