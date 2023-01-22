import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({type: SET_USER_DATA, data: {userId, email, login}} as const)

export const getAuthUserData = (userId: number, email: string, login: string) => (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;