import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchReposTC, setPaginationDefaultAC, setSearchValueAC} from "../features/Repositories/repos-reducer";
import logo from "../img/logo.svg"
import CustomInput from "./CustomInput";
import {AppRootStateType} from "../app/store";
import {fetchUserTC} from "../features/User/user-reducer";

const Header = () => {

    const searchValue = useSelector<AppRootStateType, string>(state => state.repos.pagination.searchValue)
    const dispatch = useDispatch()

    const [username, setUsername] = useState(searchValue)

    const onEnterHandler = () => {
        dispatch(setPaginationDefaultAC())
        dispatch(setSearchValueAC(username))
        dispatch(fetchUserTC(username))
        dispatch(fetchReposTC())
    }

    return (
        <header className="header">

            <a className="logo header__logo" href="https://github.com/">
                <img src={logo} alt="logo"/>
            </a>
            <CustomInput
                className="input"
                value={username}
                placeholder="Enter GitHub username"
                onChangeText={setUsername}
                onEnter={onEnterHandler}
            />

        </header>
    );
};

export default Header;