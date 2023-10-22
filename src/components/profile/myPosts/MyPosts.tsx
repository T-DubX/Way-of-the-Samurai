import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./posts/Post";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {

    const postsData: PostsType[] = [
        {id: 1, message: 'It`s our new program! Hey!', likesCount: 12},
        {id: 1, message: 'It`s my first posts', likesCount: 11},
    ]

    return (
        <div>
            My posts

            <div className={s.newPost}>
                <textarea placeholder='your news...'></textarea>
                <button className={s.btn}>Send</button>
            </div>

            <Post message={' It`s our new program! Hey!'} likeCount={12}/>
            <Post message={"It's my first posts"} likeCount={11}/>

        </div>
    );
};

