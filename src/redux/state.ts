import {PostsType} from "../components/profile/myPosts/posts/Post";
import {DialogsDataType} from "../components/dialogs/dialogItem/DialogItem";
import {MessageDataType} from "../components/dialogs/message/Message";

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPage = {
    messages: MessageDataType[]
    dialogs: DialogsDataType[]

}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    _addPost: () => void
    _updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        text
    } as const
}
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    _addPost() {
        const newPost = {
            id: '5',
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            this._addPost()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._updateNewPostText(action.text)
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }
}