import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostsType} from "./components/profile/myPosts/posts/Post";
import {DialogsDataType} from "./components/dialogs/dialogItem/DialogItem";
import {MessageDataType} from "./components/dialogs/message/Message";


const posts: PostsType[] = [
    {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
    {id: '2', message: 'It`s my first posts', likesCount: 11},
]

const dialogs: DialogsDataType[] = [
    {id: '1', name: 'Anton'},
    {id: '2', name: 'Alex'},
    {id: '3', name: 'Valera'},
    {id: '4', name: 'Pasha'},
    {id: '5', name: 'Viktoria'},
    {id: '6', name: 'Ekaterina'},
]

const messages: MessageDataType[] = [
    {id: '1', message: 'Hello world'},
    {id: '2', message: 'I am from Belarus'},
    {id: '3', message: 'How are you?'},
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);