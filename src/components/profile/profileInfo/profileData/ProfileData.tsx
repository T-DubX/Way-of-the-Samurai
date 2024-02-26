import React from 'react';
import {ProfileUser} from '../../ProfileContainer';
import {Contact} from "../../../profile/profileInfo/contact/Contact";
import s from '../ProdileInfo.module.css'
import {Info} from "../../../profile/profileInfo/info/Info";

type Props = {
   profile: ProfileUser
   isOwner: boolean
   goToEditMode: () => void
}

export const ProfileData = ({profile, isOwner, goToEditMode}: Props) => {
   return (
      <div>
         {isOwner && (
            <button onClick={goToEditMode}>edit</button>
         )}

         <Info profile={profile}/>

         <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : 'no'}
         </div>
         <div>
            <b>About me</b>: {profile.aboutMe}
         </div>
         {profile.lookingForAJobDescription && (
            <div>
               <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>)}


         {profile.contacts && (
            <div className={s.contact}><b>Contacts</b>: {Object.keys(profile.contacts).map(el => {
               return <Contact key={el} contactTitle={el}
                               contactValue={profile.contacts ? profile.contacts[el as keyof typeof profile.contacts] : null}/>
            })}</div>
         )}

      </div>
   );
};

