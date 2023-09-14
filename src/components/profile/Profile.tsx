import React from 'react';
import mainImg from '../../assets/images/2219350.jpg'
import avatar from '../../assets/images/avatar.jpg'
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <img src={mainImg} alt=""/>
            <div className={s.profileInfo}>
                <div className={s.wrapperImg}>
                    <img src={avatar} alt=""/>
                </div>

                <div className={s.description}>
                    <span className={s.name}>
                        Anton B.
                    </span>

                    <span>
                        Date of Birth: 27 january
                    </span>
                    <span>
                        City: Osipovichi
                    </span>
                    <span>
                        Education: OGPTK`18
                    </span>
                    <span>Web Site: -</span>

                </div>
            </div>
            <div>
                My posts
            </div>

            <div className={s.newPost}>
                <textarea placeholder='your news...'></textarea>
                <button className={s.btn}>Send</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <div className={s.img}></div>
                    <p className={s.text}>
                        Hey, why nobody love me?
                    </p>
                </div>

                <div className={s.item}>
                    <div className={s.img}></div>
                    <p className={s.text}>
                        It`s our new program! Hey!
                    </p>
                </div>
            </div>

        </div>
    );
};

