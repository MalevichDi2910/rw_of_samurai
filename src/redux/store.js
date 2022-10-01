import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Hi, how are you?", like: "0"},
        {id: 2, message: "It's my first post", like: "29"},
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
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your IT-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "I am fine"},
        {id: 5, message: "Bye"},
      ],
      newMessageBody: ''
    },
    navbarPage: {
      user1: "Dima",
      user2: "Anna",
      user3: "Pavel",
    },
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage,action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
    this._state.navbarPage = sidebarReducer(this._state.navbarPage,action)

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;

