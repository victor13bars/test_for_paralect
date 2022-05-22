import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./app-reducer";
import {userReducer} from "../features/User/user-reducer";
import {reposReducer} from "../features/Repositories/repos-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    repos: reposReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type AppRootStateType = ReturnType<typeof rootReducer>


