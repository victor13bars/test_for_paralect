import React from 'react';

type RepoItemPropsType = {
    name: string
    description: string
    url: string
}
const RepoItem: React.FC<RepoItemPropsType> = ({name, description, url}) => {

    return (
        <div className="repo__item">
            <a
                className="repo__name"
                href={url}
                target="_blank"
            >
                {name}
            </a>
            <p className="repo__description">
                {description ? description : "No description"}
            </p>
        </div>
    );
};

export default RepoItem;