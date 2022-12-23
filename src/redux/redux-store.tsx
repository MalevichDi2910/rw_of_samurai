import {combineReducers, legacy_createStore as createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = Store & AppStateType

export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store: StoreType = createStore(rootReducer);
export default store

//@ts-ignore
window.store = store