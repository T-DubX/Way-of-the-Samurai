import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/store";
import {Dispatch} from "redux";
import axios from "axios";
import Users from "./Users";


type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapDispatchPropsType & MapStatePropsType

// interface UsersAPIComponentProps {
//     usersPage: {
//         users: UserType[];
//         totalUsersCount: number;
//         pageSize: number;
//         currentPage: number
//     };
//     setUsers: (users: UserType[]) => void;
//     unfollow: (userId: number) => void;
//     follow: (userId: number) => void;
//     setCurrentPage: (page: number) => void
//     setTotalUsersCount: (totalCount: number) => void
// }

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)

        axios.get<{
            items: UserType[],
            error: string[],
            totalCount: number
        }>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(res => {
                console.log(res.data)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return <Users
            totalUsersCount={this.props.usersPage.totalUsersCount}
            pageSize={this.props.usersPage.pageSize}
            currentPage={this.props.usersPage.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.usersPage.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

export const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

