import React from 'react';
import {connect} from "react-redux";
import {
   follow,
   InitialUsersStateType,
   requestUsers,
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
   getUsers,
   isFetching,
   totalUsersCount
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
      const {currentPage, pageSize} = this.props.usersPage
      this.props.requestUsers(currentPage, pageSize)
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

