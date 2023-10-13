import React from 'react';
import mainImg from '../../assets/images/2219350.jpg'
import avatar from '../../assets/images/avatar.jpg'
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

