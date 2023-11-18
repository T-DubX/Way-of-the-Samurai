import {combineReducers, createStore} from "redux";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageBodyActionType} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);