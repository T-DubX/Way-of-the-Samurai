import React, {FC} from 'react';
import s from "./ProdileInfo.module.css";
import mainImg from "../../../assets/images/2219350.jpg";
import avatar from "../../../assets/images/avatar.jpg";
import {ProfileUser} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";

type PropsType = {
    profile: ProfileUser | null
}

export const ProfileInfo: FC<PropsType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.contentImg} src={mainImg} alt=""/>
            </div>

            <div className={s.profileInfo}>
                <div className={s.wrapperImg}>
                    <img src={profile.photos.large} alt="profile avatar"/>
                </div>

                <div className={s.description}>
                    <span className={s.name}>
                       {profile.fullName}
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
                    <span>Web Site: {profile.contacts.website ? profile.contacts.website : '-'}</span>

                </div>
            </div>
        </div>
    );
};

