import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";

interface UsersType {
    users: UserType[];
    totalUsersCount: number;
    pageSize: number;
    currentPage: number
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    onPageChanged: (page: number) => void;
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
                        <img className={styles.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <span>
                        {u.name}
                    </span>
                        <span>
                        {u.status}
                    </span>
                    </div>
                    {/*<div>*/}
                    {/*    <span>{u.location.country}</span>*/}
                    {/*    <span>{u.location.city}</span>*/}
                    {/*</div>*/}
                </div>)
            }
        </div>
    );
};

export default Users;