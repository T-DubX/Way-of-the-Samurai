import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import {Preloader} from "./components/common/preloader/Preloader";


type AppPropsType = MapStateToProps & {
   initializeApp: () => void
}

class App extends React.Component<AppPropsType, JSX.Element> {
   componentDidMount() {
      this.props.initializeApp()
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }

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
               <Route path={'/login'} render={() => <Login/>}/>
            </div>
         </div>
      );
   }

}

type MapStateToProps = {
   initialized: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
   return {
      initialized: state.app.initialized
   }
}

export default compose(
   // withRouter,
   connect(mapStateToProps, {initializeApp}),
)(App);

