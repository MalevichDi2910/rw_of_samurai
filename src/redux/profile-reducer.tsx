import {ProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPostActionCreator = (newPostText: string) => ({type: 'ADD-POST', newPostText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile}) as const
export const setStatus = (status: string) => ({type: 'SET_STATUS', status}) as const

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(response.data))
            }
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type PostType = {
    id: number
    message: string
    like: number
}

export type InitialStateType = {
    posts: Array<PostType>
    profile: ProfileType | null,
    status: string,
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", like: 0},
        {id: 2, message: "It's my first post", like: 29},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes) : InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                like: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}


export default profileReducer;

