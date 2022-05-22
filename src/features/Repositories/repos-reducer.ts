import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../../app/app-reducer";
import {repoAPI, RepoType} from "../../api/git-api";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../app/store";
import {handleServerNetworkError} from "../../utils/error-utils";

type PaginationType = {
    page: number
    per_page: number
    searchValue: string
}
export type InitialStateType = {
    items: Array<RepoType> | null
    pagination: PaginationType
}
const initialState: InitialStateType = {
    items: null,
    pagination: {
        page: 1,
        per_page: 4,
        searchValue: ""
    }
}

export const reposReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-REPOS':
            return {...state, items: action.repos}
        case 'SET-PAGE':
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            }
        case 'SET-SEARCH':
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    searchValue: action.searchValue
                }
            }
        case 'SET-PAGINATION-DEFAULT':
            return {
                ...state,
                pagination: {
                    page: 1,
                    per_page: 4,
                    searchValue: ""
                }
            }
        default:
            return state
    }
}

export const setReposAC = (repos: RepoType[]) => ({type: 'SET-REPOS', repos} as const)
export const setPageAC = (page: number) => ({type: 'SET-PAGE', page} as const)
export const setSearchValueAC = (searchValue: string) => ({type: 'SET-SEARCH', searchValue} as const)
export const setPaginationDefaultAC = () => ({type: 'SET-PAGINATION-DEFAULT'} as const)

export const fetchReposTC = () => async (dispatch: ThunkDispatch, getState: () => AppRootStateType) => {
    let page = getState().repos.pagination.page
    let per_page = getState().repos.pagination.per_page
    let username = getState().repos.pagination.searchValue

    dispatch(setAppStatusAC('loading'))

    try {
        let response = await repoAPI.getRepos(username, page, per_page)
        dispatch(setReposAC(response.data))
        dispatch(setAppStatusAC('succeeded'))
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }
}

export type SetReposActionType = ReturnType<typeof setReposAC>;
export type SetPageActionType = ReturnType<typeof setPageAC>;
export type SetSearchValueActionType = ReturnType<typeof setSearchValueAC>;
export type SetPaginationDefaultActionType = ReturnType<typeof setPaginationDefaultAC>;

type ActionsType =
    | SetReposActionType
    | SetPageActionType
    | SetSearchValueActionType
    | SetPaginationDefaultActionType

type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>
