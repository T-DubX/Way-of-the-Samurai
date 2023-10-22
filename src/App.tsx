import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import s from "./components/dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {PostsType} from "./components/profile/myPosts/posts/Post";
import {DialogsDataType} from "./components/dialogs/dialogItem/DialogItem";
import {MessageDataType} from "./components/dialogs/message/Message";

type AppPropsType = {
    posts: PostsType[]
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
}

function App(props: AppPropsType): JSX.Element {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    {/*<Settings/>*/}
                    {/*<Music/>*/}
                    {/*<News/>*/}
                    {/*<Dialogs/>*/}
                    {/*<Profile/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
