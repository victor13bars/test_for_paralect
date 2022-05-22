import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../../app/app-reducer";
import {Dispatch} from 'redux'
import {userAPI, UserType} from "../../api/git-api";
import {handleServerNetworkError} from "../../utils/error-utils";

export type InitialStateType = {
    userInfo: UserType | null
}

const initialState: InitialStateType = {
    userInfo: null
}

export const userReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-USER':
            return {...state, userInfo: action.user}
        default:
            return state
    }
}

export const setUserAC = (user: UserType | null) => ({type: 'SET-USER', user})

export const fetchUserTC = (username: string) => async (dispatch: ThunkDispatch) => {
    dispatch(setAppStatusAC('loading'))

    try {
        let response = await userAPI.getUserInfo(username)
        dispatch(setUserAC(response.data))
        dispatch(setAppStatusAC('succeeded'))
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }
}

type ActionsType = ReturnType<typeof setUserAC>

type ThunkDispatch = Dispatch<ActionsType | SetAppStatusActionType | SetAppErrorActionType>

