import React, { ChangeEvent, FC, useState } from "react";
import s from "./ProdileInfo.module.css";
import mainImg from "../../../assets/images/2219350.jpg";
import userPhoto from "../../../assets/images/user.png";
import { ProfileUser } from "../ProfileContainer";
import { Preloader } from "../../common/preloader/Preloader";
import { ProfileStatus } from "./profileStatus/ProfileStatus";
import { Contact } from "./contact/Contact";
import { ProfileData } from "../../profile/profileInfo/profileData/ProfileData";
import {
   FormDataType,
   ProfileDataFormReduxForm,
} from "../../profile/profileInfo/profileDataForm/ProfileDataForm";
import { WrappedFieldProps } from "redux-form";

type PropsType = {
   profile: ProfileUser | null;
   status: string;
   updateStatus: (status: string) => void;
   isOwner: boolean;
   savePhoto: (value: File) => void;
   saveProfile: (profile: FormDataType) => Promise<any>;
};

export const ProfileInfo: FC<PropsType> = ({
   profile,
   status,
   updateStatus,
   isOwner,
   savePhoto,
   saveProfile,
}) => {
   const [editMode, setEditMode] = useState(false);

   if (!profile) {
      return <Preloader />;
   }

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
         savePhoto(e.target.files[0]);
      }
   }

   const onSubmit = (formData: FormDataType) => {
      saveProfile(formData).then(() => {
         setEditMode(false);
      });
   }

   return (
      <div>
         <div>
            <img className={s.contentImg} src={mainImg} alt="" />
         </div>

         <div className={s.profileInfo}>
            <div className={s.wrapperImg}>
               {profile.photos.large ? (
                  <img src={profile.photos.large} alt="profile avatar" />
               ) : (
                  <img src={userPhoto} alt="profile avatar" />
               )}
            </div>

            <div className={s.description}>
               <div className={s.wrapperName}>
                  <span className={s.name}>{profile.fullName}</span>

                  {isOwner && (
                     <input type="file" onChange={onMainPhotoSelected} />
                  )}

                  <ProfileStatus status={status} updateStatus={updateStatus} />
               </div>

               {editMode ? (
                  <ProfileDataFormReduxForm
                     onSubmit={onSubmit}
                     initialValues={profile}
                     profile={profile}
                  />
               ) : (
                  <ProfileData
                     goToEditMode={() => setEditMode(true)}
                     profile={profile}
                     isOwner={isOwner}
                  />
               )}
            </div>
         </div>
      </div>
   );
};
