const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)

export type DialogsActionsTypes = ReturnType<typeof sendMessageCreator>

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
}

const initialState = {
    messages: [
        {id: 1, name: 'Karina', message: 'Hi'},
        {id: 2, name: 'Tatyana', message: 'How is your learn?'},
        {id: 3, name: 'Vlad', message: 'Yo'},
        {id: 4, name: 'Katya', message: 'Hello'},
        {id: 5, name: 'Marya', message: 'Go'},
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
    ]
}

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state, messages: [...state.messages, {id: 7, name: 'Vlad', message: body}]};
        default:
            return state;
    }
}

export default dialogsReducer;
