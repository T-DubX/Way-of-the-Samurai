import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerProps

class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfile(Number(userId))
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

type MapStatePropsType = {
    profile: ProfileUser | null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

const AuthRedirectComponents = (props: PropsType) => {
    return <ProfileAPIContainer {...props}/>
}

const withUrlDataContainerComponent = withRouter(AuthRedirectComponents)

export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {
    setUserProfile,
    getUserProfile
})(withUrlDataContainerComponent))
