import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./posts/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts

            <div className={s.newPost}>
                <textarea placeholder='your news...'></textarea>
                <button className={s.btn}>Send</button>
            </div>

            <Post/>
            <Post/>
            
            {/*        <div className={s.item}>*/}
            {/*            <div className={s.img}></div>*/}
            {/*            <p className={s.text}>*/}
            {/*                It`s our new program! Hey!*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

        </div>
    );
};

