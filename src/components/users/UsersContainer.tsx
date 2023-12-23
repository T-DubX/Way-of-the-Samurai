import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

interface UsersAPIComponentProps {
    usersPage: {
        users: UserType[];
        totalUsersCount: number;
        pageSize: number;
        currentPage: number
        isFetching: boolean
        followingInProgress: number[]
    };
    setUsers: (users: UserType[]) => void;
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, isFetching: boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentProps> {

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
            toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersAPIComponent)

