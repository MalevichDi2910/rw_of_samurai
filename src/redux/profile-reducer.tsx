import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const
export const updateNewPostTextActionCreator = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text}) as const

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

export type PostType = {
    id: number
    message: string
    like: number
}

export type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", like: 0},
        {id: 2, message: "It's my first post", like: 29},
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
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
        default:
            return state;
    }
}


export default profileReducer;