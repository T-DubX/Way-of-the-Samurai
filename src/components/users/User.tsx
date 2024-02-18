import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


export interface User {
   user: UserType;
   followingInProgress: number[]
   unfollow: (userId: number) => void;
   follow: (userId: number) => void;
}

export const User = ({user, followingInProgress, unfollow, follow}: User) => {
   const u = user
   return (
      <div>
         <div style={{width: '100px'}}>
            <NavLink to={'/profile/' + u.id}>
               <img className={styles.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                    alt=""/>
            </NavLink>
         </div>
         <div>
            {u.followed
               ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                  unfollow(u.id)
               }}>Unfollow</button>
               :
               <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                  follow(u.id)
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
      </div>


   );
};