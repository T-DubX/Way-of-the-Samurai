import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";


import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from '../../redux/store';
import {
   getStatus,
   getUserProfile, savePhoto,
   setUserProfile,
   updateStatus,
} from '../../redux/profile-reducer';

export type ProfileUser = {
   aboutMe?: string | undefined,
   contacts?: {
      facebook: string | null,
      website: string | null,
      vk: string | null,
      twitter: string | null,
      instagram: string | null,
      youtube: string | null,
      github: string | null,
      mainLink: string | null
   } | undefined,
   lookingForAJob?: boolean,
   lookingForAJobDescription?: string | undefined,
   fullName?: string | undefined,
   userId?: number,
   photos: {
      small?: string | undefined,
      large?: string | undefined
   }
};

type PathParamsType = {
   userId: string
}

type ProfileAPIContainerProps = {
   profile: ProfileUser | null
   setUserProfile: (profile: ProfileUser) => void
   getUserProfile: (userId: number) => void
   getStatus: (userId: number) => void
   status: string
   updateStatus: (status: string) => void
   authorizedUserId: number,
   isAuth: boolean
   savePhoto: (file: File) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerProps

class ProfileContainer extends React.Component<PropsType> {

   refreshProfile() {
      let userId: number = Number(this.props.match.params.userId)
      if (!userId) {
         userId = this.props.authorizedUserId
         if (!userId) {
            this.props.history.push('/login')
         }
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }

   componentDidMount() {
      this.refreshProfile()
   }

   componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
      if (this.props.match.params.userId !== prevProps.match.params.userId) {
         this.refreshProfile()
      }
   }

   render() {

      return (
         <Profile {...this.props}
                  isOwner={!this.props.match.params.userId}
                  profile={this.props.profile}
                  status={this.props.status}
                  updateStatus={this.props.updateStatus}
                  savePhoto={this.props.savePhoto}
         />
      )
   }
}

type MapStatePropsType = {
   profile: ProfileUser | null
   status: string
   authorizedUserId: number | null
   isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      authorizedUserId: state.auth.userId,
      isAuth: state.auth.isAuth
   }
}

export default compose<React.ComponentType>(
   connect(mapStateToProps, {
      setUserProfile,
      getUserProfile,
      getStatus,
      updateStatus,
      savePhoto
   }),
   withRouter,
   // withAuthRedirect
)(ProfileContainer)

