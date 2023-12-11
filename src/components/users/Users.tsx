import React from "react";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'

interface UsersProps {
    usersPage: {
        users: UserType[];
        totalUsersCount: number;
        pageSize: number;
        currentPage: number
    };
    setUsers: (users: UserType[]) => void;
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export class Users extends React.Component<UsersProps> {

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
                // this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={styles.wrapperPagesPagination}>
                    {pages.map(el => {
                        return <span key={el}
                                     className={styles.page + ' ' + (this.props.usersPage.currentPage === el ? styles.selectedPage : '')}
                                     onClick={() => {
                                         this.onPageChanged(el)
                                     }}>{el}</span>
                    })}
                </div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                        <div style={{width: '100px'}}>
                            <img className={styles.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt=""/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
}
