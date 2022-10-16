import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

export type MessageType = {
  id: number,
  name: string
  message: string
}

export type DialogType = {
  id: number,
  name: string
}

export type PostType = {
  id: number,
  message: string
  like: number
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  friends: Array<DialogType>
  newMessageBody: string
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
}

export type StoreType = {
  _state: RootStateType
  _callSubscriber: (state: RootStateType) => void
  subscribe: (observer: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void
}

type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>


const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", like: 0},
        {id: 2, message: "It's my first post", like: 29},
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Victor"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Valera"},
      ],
      messages: [
        {id: 1, name: 'Sergey', message: 'Hi'},
        {id: 2, name: 'Diana', message: 'How is your learn?'},
        {id: 3, name: 'Vitaliy', message: 'Yo'},
        {id: 4, name: 'Alex', message: 'Hello'},
        {id: 5, name: 'Tatyana', message: 'Make some noise'},
        {id: 6, name: 'Vlad', message: 'Hello World!'},
      ],
      friends: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Sergey'},
      ],
      newMessageBody: ''
    },
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer: any) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)

    this._callSubscriber(this._state);
  }
}

export default store;

