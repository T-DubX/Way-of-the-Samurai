import React, {FC} from 'react';
import {ActionType, followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";

export const Users: FC<UsersPropsType> = (props) => {

    props.usersPage.users.length === 0 && props.setUsers([
        {
            id: 1,
            photoUrl: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
            followed: false,
            fullName: 'Anton',
            status: 'I am a boss',
            location: {city: 'Osipovichi', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss 2',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
            followed: false,
            fullName: 'Pasha',
            status: 'I am a boss 3 ',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            photoUrl: 'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg',
            followed: true,
            fullName: 'Sveta',
            status: 'I am a boss 4',
            location: {city: 'Osipovichi', country: 'Belarus'}
        }
    ])


    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div style={{width: '100px'}}>
                        <img style={{maxWidth: '100%'}} src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>
                         <span>
                        {u.fullName}
                    </span>
                        <span>
                        {u.status}
                    </span>
                    </div>
                    <div>
                        <span>{u.location.country}</span>
                        <span>{u.location.city}</span>
                    </div>
                </div>)
            }
        </div>
    );
};

