const UPDATE_NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export const sendMessageCreator = () => ({type: SEND_MESSAGE}) as const

export type DialogsActionsTypes =
    ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

export type MessageType = {
    id: number,
    name: string
    message: string
}

export type DialogType = {
    id: number,
    name: string
}

export type InitialStateType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    friends: Array<DialogType>
    newMessageBody: string
}

const initialState = {
    messages: [
        {id: 1, name: 'Karina', message: 'Hi'},
        {id: 2, name: 'Tatyana', message: 'How is your learn?'},
        {id: 3, name: 'Vlad', message: 'Yo'},
        {id: 4, name: 'Katya', message: 'Hello'},
        {id: 5, name: 'Pavel', message: 'Go'},
        {id: 6, name: 'Alexandr', message: 'Hello World!'},
    ] ,
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Karina'},
        {id: 4, name: 'Tatyana'},
        {id: 5, name: 'Alexandr'},
        {id: 6, name: 'Ivan'},
    ],
    friends: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Karina'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state, newMessageBody: '', messages: [...state.messages, {id: 7, name: 'Vladlen', message: body}]};
        default:
            return state;
    }
}

export default dialogsReducer
