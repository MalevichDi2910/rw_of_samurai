import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatch} from "./redux-store";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const)

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const loginTC = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<AppDispatch>) => {
    let response = await authAPI.logIn(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logOut()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }

}

export type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: initialStateType = initialState, action: AuthActionsTypes) : initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;