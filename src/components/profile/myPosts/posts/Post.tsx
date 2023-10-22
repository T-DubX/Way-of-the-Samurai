import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.wrapperItem}>
            <div className={s.item}>
                <div className={s.img}></div>
                <p className={s.text}>
                    {props.message}
                </p>
            </div>
            <span className={s.likeCount}>like {props.likeCount}</span>
        </div>
    );
};

