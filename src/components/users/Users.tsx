import React from 'react';
import {UserType} from "../../redux/users-reducer";
import {Paginator} from '../common/paginator/Paginator';
import {User} from './User';


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

const Users = ({
                  totalUsersCount,
                  onPageChanged,
                  pageSize,
                  currentPage,
                  users,
                  followingInProgress,
                  follow,
                  unfollow,
                  ...props
               }: UsersType) => {
   return (
      <div>
         <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            pageSize={pageSize}

            totalItemsCount={totalUsersCount}
         />
         <div>
            {
               users.map(u =>
                  <User key={u.id} user={u} followingInProgress={followingInProgress} follow={follow}
                        unfollow={unfollow}/>
               )
            }
         </div>

      </div>
   );
};

export default Users;