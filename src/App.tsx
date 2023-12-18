import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import {ProfileContainer} from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
//
// export type StoreType = {
//     subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionType) => void
// }
//
// type AppPropsType = {
//     state: StateType
//     dispatch: (action: ActionType) => void
//     store: StoreType
// }

function App(): JSX.Element {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer
                       />}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}


export default App;
