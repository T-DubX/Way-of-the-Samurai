import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../../api/api";

interface UsersType {
    users: UserType[];
    totalUsersCount: number;
    pageSize: number;
    currentPage: number
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    onPageChanged: (page: number) => void;
    followingInProgress: number[]
    toggleFollowingProgress: (userId: number, isFetching: boolean) => void
}

const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.wrapperPagesPagination}>
                {pages.map(el => {
                    return <span key={el}
                                 className={styles.page + ' ' + (props.currentPage === el ? styles.selectedPage : '')}
                                 onClick={() => {
                                     props.onPageChanged(el)
                                 }}>{el}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div style={{width: '100px'}}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={styles.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(u.id, true)
                                followAPI.unfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(u.id, false)
                                    })
                            }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(u.id, true)
                                followAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(u.id, false)
                                    })
                            }}>Follow</button>
                        }
                    </div>
                    <div>
                        <span>
                        {u.name}
                    </span>
                        <span>
                        {u.status}
                    </span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;