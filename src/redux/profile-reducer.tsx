import {PhotosType, ProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {AppDispatch, StoreType} from "../redux/redux-store";
import {stopSubmit} from "redux-form";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const
export const deletePost = (postId: number) => ({type: DELETE_POST, postId}) as const
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos}) as const
export const saveProfileSuccess = (profile: ProfileType) => ({type: SAVE_PROFILE_SUCCESS, profile}) as const

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        console.log(error)
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: AppDispatch, getState: StoreType) => {
    const userId = getState().auth.id
    console.log(userId)
    const response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]} ))
        return Promise.reject(response.data.messages[0])
    }
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof saveProfileSuccess>

export type PostType = {
    id: number
    message: string
    like: number
    date: string
}

export type InitialStateType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", like: 0, date: '14.03.2024'},
        {id: 2, message: "It's my first post", like: 29, date: '14.06.2023'},
    ],
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes) : InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: action.newPostText,
                like: 0,
                date: '14.03.2024'
            };
            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state,  posts: state.posts.filter(p => p.id !== action.postId)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile!, photos: action.photos}}
        case SAVE_PROFILE_SUCCESS:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export default profileReducer;

