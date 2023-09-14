import React from 'react';
import s from './Post.module.css'

export const Post = () => {
    return (
        <div className={s.item}>
            <div className={s.img}></div>
            <p className={s.text}>
                Hey, why nobody love me?
            </p>
        </div>
    );
};

