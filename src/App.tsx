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
import {ActionType, StateType} from "./redux/state";

export type StoreType = {
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
    store: StoreType
}

function App(props: AppPropsType): JSX.Element {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route path={'/'} />*/}
                <Route path={'/dialogs'}
                       render={() => <Dialogs
                           store={props.store}
                       />}/>
                <Route path={'/profile'} render={() => <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}
                />}/>
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
