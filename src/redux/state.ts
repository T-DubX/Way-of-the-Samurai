import {PostsType} from "../components/profile/myPosts/posts/Post";
import {DialogsDataType} from "../components/dialogs/dialogItem/DialogItem";
import {MessageDataType} from "../components/dialogs/message/Message";
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from "./profile-reducer";
import {
    AddMessageActionType,
    dialogsReducer,
    UpdateNewMessageBodyActionType
} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPage = {
    messages: MessageDataType[]
    dialogs: DialogsDataType[]
    newMessageText: string
}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
                {id: '2', message: 'It`s my first posts', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: '1', message: 'Hello world'},
                {id: '2', message: 'I am from Belarus'},
                {id: '3', message: 'How are you?'},
            ],
            dialogs: [
                {id: '1', name: 'Anton'},
                {id: '2', name: 'Alex'},
                {id: '3', name: 'Valera'},
                {id: '4', name: 'Pasha'},
                {id: '5', name: 'Viktoria'},
                {id: '6', name: 'Ekaterina'},
            ],
            newMessageText: '',
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}