import {ProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile}) as const

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

export type PostType = {
    id: number
    message: string
    like: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", like: 0},
        {id: 2, message: "It's my first post", like: 29},
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) : InitialStateType => {
    debugger
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {...state, newPostText: '', posts: [...state.posts, newPost]};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}


export default profileReducer;

