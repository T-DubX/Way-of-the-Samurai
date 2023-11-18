import React, {FC} from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {PostsType} from "./myPosts/posts/Post";

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export const Profile: FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
            />
        </div>
    );
};

