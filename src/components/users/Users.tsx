import React from "react";
import userPhoto from "../../assets/images/user.png";
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

interface UsersProps {
    usersPage: {
        users: UserType[];
    };
    setUsers: (users: UserType[]) => void;
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
}

export class Users extends React.Component<UsersProps> {
    constructor(props: any) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => this.props.setUsers(res.data.items))
    }

    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                        <div style={{width: '100px'}}>
                            <img style={{maxWidth: '100%'}} src={u.photos.small !== null ? u.photos.small : userPhoto}
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
