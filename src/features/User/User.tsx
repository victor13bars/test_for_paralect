import React from 'react';
import followers_icon from "../../img/followers.svg";
import following_icon from "../../img/following.svg";
import {addLetter} from "../../utils/addLetter";
import {useTypedSelector} from "../../hooks/useTypedselector";

const User = () => {

    const name = useTypedSelector(state => state.user.userInfo?.name)
    const login = useTypedSelector(state => state.user.userInfo?.login)
    const followers = useTypedSelector(state => state.user.userInfo?.followers)
    const following = useTypedSelector(state => state.user.userInfo?.following)
    const html_url = useTypedSelector(state => state.user.userInfo?.html_url)
    const avatar_url = useTypedSelector(state => state.user.userInfo?.avatar_url)

    return (
        <div className="user">
            <img className="user__avatar" src={avatar_url} alt="avatar"/>
            <div className="user__info">
                <h3 className="user__name">{name}</h3>
                <a className="user__login" href={html_url} target="_blank">{login}</a>
                <div className="user__follow">

                    <div className="user__follow-content">
                        <img className="user__follow-icon" src={followers_icon} alt="followers"/>
                        <p className="user__follow-count">
                            {followers && addLetter(followers)} followers
                        </p>
                    </div>

                    <div className="user__follow-content">
                        <img className="user__follow-icon" src={following_icon} alt="following"/>
                        <p className="user__follow-count">
                            {following && addLetter(following)} following
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default User;