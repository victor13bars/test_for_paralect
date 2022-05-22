import axios from 'axios'

const settings = {
    // withCredentials: true,
    headers: {"Accept": "application/vnd.github.v3+json"}
}
export const instance = axios.create({
    baseURL: `https://api.github.com/users/`,
    ...settings
})

export const repoAPI = {
    getRepos(username: string, page: number, per_page: number) {
        const promise = instance.get<RepoType[]>(`${username}/repos`, {
            params: {
                page,
                per_page
            }
        });
        return promise;
    }
}

export const userAPI = {
    getUserInfo(username: string) {
        const promise = instance.get<UserType>(`${username}`);
        return promise;
    }
}

export type UserType = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
    name: string,
    company: string,
    blog: string,
    location: string,
    email: string,
    hireable: boolean,
    bio: string,
    twitter_username: string,
    public_repos: number,
    public_gists: number,
    followers: number,
    following: number,
    created_at: string
    updated_at: string
}

type OwnerType = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean
}
type PermissionsType = {
    "admin": boolean,
    "push": boolean,
    "pull": boolean
}
export type RepoType = {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    "owner": OwnerType,
    private: boolean,
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    archive_url: string,
    assignees_ur: string,
    blobs_url: string,
    branches_url: string,
    collaborators_url: string,
    comments_url: string,
    commits_url: string,
    compare_url: string,
    contents_url: string,
    contributors_url: string,
    deployments_url: string,
    downloads_url: string,
    events_url: string,
    forks_url: string,
    git_commits_url: string,
    git_refs_url: string,
    git_tags_url: string,
    git_url: string,
    issue_comment_url: string,
    issue_events_url: string,
    issues_url: string,
    keys_url: string,
    labels_u: string,
    languages_url: string,
    merges_url: string,
    milestones_url: string,
    notifications_url: string,
    pulls_url: string,
    releases_url: string,
    ssh_url: string,
    stargazers_url: string,
    statuses_url: string,
    subscribers_url: string,
    subscription_url: string,
    tags_url: string,
    teams_url: string,
    trees_url: string,
    clone_url: string,
    mirror_url: string,
    hooks_url: string,
    svn_url: string,
    homepage: string,
    language: null,
    forks_count: number,
    stargazers_count: number
    watchers_count: number,
    size: number,
    default_branch: string,
    open_issues_count: number,
    is_template: boolean,
    topics: Array<string>
    has_issues: boolean,
    has_projects: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    has_downloads: boolean,
    archived: boolean,
    disabled: boolean,
    visibility: string,
    pushed_at: string,
    created_at: string,
    updated_at: string,
    "permissions": PermissionsType,
    template_repository: null
}