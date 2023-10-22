import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./posts/Post";

type PostsType = {
    id: string
    message: string
    likesCount: number
}

export const MyPosts = () => {

    const posts: PostsType[] = [
        {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
        {id: '2', message: 'It`s my first posts', likesCount: 11},
    ]

    const postsElements: JSX.Element[] = posts.map(post => <Post message={post.message} likeCount={post.likesCount}/>)

    return (
        <div className={s.wrapperPosts}>
            <h3>My posts</h3>
            <div className={s.newPost}>
                <textarea placeholder='your news...'></textarea>
                <button className={s.btn}>Send</button>
            </div>
            <div className={s.posts}>
                {
                    postsElements
                }
            </div>

        </div>
    );
};

