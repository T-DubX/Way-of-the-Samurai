import React, {FC} from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {StoreType} from "../../App";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

