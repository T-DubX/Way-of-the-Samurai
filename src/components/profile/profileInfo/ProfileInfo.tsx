import React, {ChangeEvent, FC} from 'react';
import s from "./ProdileInfo.module.css";
import mainImg from "../../../assets/images/2219350.jpg";
import userPhoto from "../../../assets/images/user.png";
import {ProfileUser} from "../ProfileContainer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./profileStatus/ProfileStatus";

type PropsType = {
   profile: ProfileUser | null
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (value: File) => void
}

export const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   if (!profile) {
      return <Preloader/>
   }

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
         savePhoto(e.target.files[0])
      }
   }

   return (
      <div>
         <div>
            <img className={s.contentImg} src={mainImg} alt=""/>
         </div>

         <div className={s.profileInfo}>
            <div className={s.wrapperImg}>
               {profile.photos.large ?
                  <img src={profile.photos.large} alt="profile avatar"/>
                  :
                  <img src={userPhoto} alt="profile avatar"/>
               }
            </div>

            <div className={s.description}>
               <div className={s.wrapperName}>
                   <span className={s.name}>
                       {profile.fullName}
                    </span>

                  {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                  <ProfileStatus status={status} updateStatus={updateStatus}/>
               </div>


               <span>
                        Date of Birth: 27 january
                    </span>
               <span>
                        City: Osipovichi
                    </span>
               <span>
                        Education: OGPTK`18
                    </span>
               <span>Web Site: {profile.contacts?.website ? profile.contacts.website : '-'}</span>

            </div>
         </div>
      </div>
   );
};

