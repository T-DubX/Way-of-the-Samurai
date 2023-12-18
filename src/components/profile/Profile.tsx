import React, {FC} from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {PostsType} from "./myPosts/posts/Post";
import {ProfileUser} from "./ProfileContainer";

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileUser | null
}

type ProfilePageProps = {
    profile: ProfileUser | null
}

export const Profile: FC<ProfilePageProps> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer
            />
        </div>
    );
};

