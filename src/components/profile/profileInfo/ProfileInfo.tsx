import React from 'react';
import s from "./ProdileInfo.module.css";
import mainImg from "../../../assets/images/2219350.jpg";
import avatar from "../../../assets/images/avatar.jpg";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.contentImg} src={mainImg} alt=""/>
            </div>

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
        </div>
    );
};

