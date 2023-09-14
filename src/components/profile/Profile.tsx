import React from 'react';
import mainImg from '../../assets/images/2219350.jpg'
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src={mainImg} alt=""/>
            <div>
                avatar + description
            </div>
            <div>
                My posts
            </div>

            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>

                <div className={s.item}>
                    post 2
                </div>
            </div>

        </div>
    );
};

