import React, {FC} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../App";

type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {
    const onAddPost = () => {
        props.store.dispatch(addPostAC())
        props.store.dispatch(updateNewPostTextAC(''))
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={props.store.getState().profilePage.posts}
            newPostText={props.store.getState().profilePage.newPostText}
        />
    );
};

