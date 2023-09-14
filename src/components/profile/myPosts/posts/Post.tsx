import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.img}></div>
            <p className={s.text}>
                {props.message}
            </p>
        </div>
    );
};

