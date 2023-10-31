import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType): JSX.Element {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path={'/profile'} render={() => <Profile state={props.state.profilePage}/>}/>
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
    );
}


export default App;
