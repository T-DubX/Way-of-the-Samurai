import {PostsType} from "../components/profile/myPosts/posts/Post";
import {DialogsDataType} from "../components/dialogs/dialogItem/DialogItem";
import {MessageDataType} from "../components/dialogs/message/Message";

export type ProfilePageType = {
    posts: PostsType[]
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

export const state: StateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
            {id: '2', message: 'It`s my first posts', likesCount: 11},
        ],

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

}

export const addPost = (postMessage: string) => {
    const newPost: PostsType = {id: '5', message: postMessage, likesCount: 0}

    state.profilePage.posts.push(newPost)
}