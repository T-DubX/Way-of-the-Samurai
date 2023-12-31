import React from 'react';
import {connect} from "react-redux";
import {
   follow, requestUsers,
   InitialUsersStateType,
   setCurrentPage,
   toggleFollowingProgress,
   unfollow,
   UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {
   currentPage,
   followingInProgress,
   getPageSize,
   isFetching,
   totalUsersCount,
   getUsers
} from "../../redux/users-selectors";


type MapStatePropsType = {
   usersPage: InitialUsersStateType
   pageSize: number
   totalUsersCount: number
   currentPage: number
   isFetching: boolean
   followingInProgress: Array<number>
}

interface UsersContainerProps {
   usersPage: {
      users: UserType[];
      totalUsersCount: number;
      pageSize: number;
      currentPage: number
      isFetching: boolean
      followingInProgress: number[]
   };
   unfollow: (userId: number) => void;
   follow: (userId: number) => void;
   requestUsers: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<UsersContainerProps> {

   componentDidMount() {
      this.props.requestUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
   }

   onPageChanged = (pageNumber: number) => {
      this.props.requestUsers(pageNumber, this.props.usersPage.pageSize)
   }

   render() {
      return <> {this.props.usersPage.isFetching ? <Preloader/> : null} <Users
         totalUsersCount={this.props.usersPage.totalUsersCount}
         pageSize={this.props.usersPage.pageSize}
         currentPage={this.props.usersPage.currentPage}
         onPageChanged={this.onPageChanged}
         users={this.props.usersPage.users}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
         followingInProgress={this.props.usersPage.followingInProgress}
      />
      </>
   }
}

// export const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//    return {
//       usersPage: state.usersPage,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress
//    }
// }

export const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      usersPage: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: totalUsersCount(state),
      currentPage: currentPage(state),
      isFetching: isFetching(state),
      followingInProgress: followingInProgress(state)
   }
}

export default compose<React.ComponentType>(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      requestUsers
   })
)(UsersContainer)

