import React, {FC} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

// type MyPostsContainerPropsType = {
//     store: StoreType
// }

export const MyPostsContainer: FC = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const onAddPost = () => {
                        store.dispatch(addPostAC())
                        store.dispatch(updateNewPostTextAC(''))
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            addPost={onAddPost}
                            posts={store.getState().profilePage.posts}
                            newPostText={store.getState().profilePage.newPostText}
                        />
                    )
                }

            }
        </StoreContext.Consumer>
    );
};

