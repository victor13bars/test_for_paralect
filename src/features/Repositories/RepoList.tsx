import React from 'react';
import RepoItem from "./Repository/RepoItem";
import Pagination from "../../components/Pagination/Pagination";
import {useTypedSelector} from "../../hooks/useTypedselector";
import {useDispatch} from "react-redux";
import {fetchReposTC, setPageAC} from "./repos-reducer";

type ChangePageType = (selectedItem: { selected: number }) => void

const RepoList: React.FC = () => {

    const dispatch = useDispatch()
    const repos = useTypedSelector(state => state.repos.items)
    const count_repos = useTypedSelector(state => state.user.userInfo?.public_repos)
    const page = useTypedSelector(state => state.repos.pagination.page)
    const per_page = useTypedSelector(state => state.repos.pagination.per_page)

    const changePage: ChangePageType = ({selected}) => {
        dispatch(setPageAC(selected + 1))
        dispatch(fetchReposTC())
    }
    return (

        <div className="repos">
            <h1 className="repos__title">Repositories ({count_repos})</h1>
            <div className="repos__content">
                {
                    repos && repos.map(repo =>
                        <RepoItem
                            key={repo.id}
                            name={repo.name}
                            description={repo.description}
                            url={repo.html_url}
                        />)
                }
            </div>

            <Pagination
                count_repos={count_repos}
                page={page}
                per_page={per_page}
                changePage={changePage}
            />
        </div>


    );
};

export default RepoList;