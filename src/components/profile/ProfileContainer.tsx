import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

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
   getStatus: (userId: number) => void
   status: string
   updateStatus: (status: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerProps

class ProfileContainer extends React.Component<PropsType> {
   componentDidMount() {
      let userId = this.props.match.params.userId
      if (!userId) userId = '30299'
      this.props.getUserProfile(Number(userId))
      this.props.getStatus(Number(userId))
   }

   render() {

      return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                  updateStatus={this.props.updateStatus}/>
      )
   }
}

type MapStatePropsType = {
   profile: ProfileUser | null
   status: string
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      profile: state.profilePage.profile,
      status: state.profilePage.status
   }
}

export default compose<React.ComponentType>(
   connect(mapStateToProps, {
      setUserProfile,
      getUserProfile,
      getStatus,
      updateStatus
   }),
   withRouter,
   // withAuthRedirect
)(ProfileContainer)

