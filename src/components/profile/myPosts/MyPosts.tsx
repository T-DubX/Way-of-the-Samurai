import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post, PostsType} from "./posts/Post";

type ProfilePropsType = {
    posts: PostsType[]
}

export const MyPosts: FC<ProfilePropsType> = (props) => {

    const postsElements: JSX.Element[] = props.posts.map(post => <Post message={post.message}
                                                                       likeCount={post.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        const text = newPostElement.current?.value
    }

    return (
        <div className={s.wrapperPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea ref={newPostElement} placeholder='your news...'></textarea>
                <button className={s.btn} onClick={onAddPost
                }>Add post
                </button>
            </div>
            <div className={s.posts}>
                {
                    postsElements
                }
            </div>

        </div>
    );
};

