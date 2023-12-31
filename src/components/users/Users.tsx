import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

export interface UsersType {
   users: UserType[];
   totalUsersCount: number;
   pageSize: number;
   currentPage: number
   unfollow: (userId: number) => void;
   follow: (userId: number) => void;
   onPageChanged: (page: number) => void;
   followingInProgress: number[]
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
                        props.unfollow(u.id)
                     }}>Unfollow</button>
                     :
                     <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.follow(u.id)
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