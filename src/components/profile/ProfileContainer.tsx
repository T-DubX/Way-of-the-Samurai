import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileUser = {
    aboutMe: string
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

type PathParamsType = {
    userId: string
}

type ProfileAPIContainerProps = {
    profile: ProfileUser | null
    setUserProfile: (profile: ProfileUser) => void
    getUserProfile: (userId: number) => void
    isAuth: boolean
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerProps

class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfile(Number(userId))
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};
type MapStatePropsType = {
    profile: ProfileUser | null
    isAuth: boolean
    // profilePage: ProfilePageType
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        // profilePage: state.profilePage,
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}
const withUrlDataContainerComponent = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    getUserProfile
})(withUrlDataContainerComponent)

