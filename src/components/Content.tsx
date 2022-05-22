import React from 'react';
import User from "../features/User/User";
import RepoList from "../features/Repositories/RepoList";
import ReposNotFound from "./ReposNotFound";
import {useTypedSelector} from "../hooks/useTypedselector";

const Content: React.FC = () => {

    const public_repos = useTypedSelector(state => state.user.userInfo?.public_repos)
    return (
        <main className='container content__container'>
            <User/>
            {public_repos && public_repos > 0
                ?
                <RepoList/>
                :
                <ReposNotFound/>
            }
        </main>
    );
};

export default Content;