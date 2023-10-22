import React, {FC} from 'react';
import mainImg from '../../assets/images/2219350.jpg'
import avatar from '../../assets/images/avatar.jpg'
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {PostsType} from "./myPosts/posts/Post";

type ProfilePropsType = {
    posts: PostsType[]
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

