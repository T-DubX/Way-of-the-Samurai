import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  getUsers,
  InitialStateType,
  setCurrentPage,
  toggleFollowingProgress, unfollow,
  UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
  usersPage: InitialStateType
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
  getUsers: (currentPage: number, pageSize: number) => void
}

export class UsersContainer extends React.Component<UsersContainerProps> {

  componentDidMount() {
    this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
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
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
  })
)(UsersContainer)

