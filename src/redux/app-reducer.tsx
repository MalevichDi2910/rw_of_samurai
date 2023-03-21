import {Dispatch} from "redux";
import {AppDispatch} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS} as const);

export type AuthActionsTypes = ReturnType<typeof initializedSuccess>

export const initializeApp = () => (dispatch: Dispatch<AppDispatch>) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then( () => {
        dispatch(initializedSuccess())
    })
}

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: AuthActionsTypes) : initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export default appReducer;