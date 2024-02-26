import React from 'react';
import {ProfileUser} from "../../../profile/ProfileContainer";
import s from '../ProdileInfo.module.css'

type Props = {
   profile: ProfileUser
}

export const Info = ({profile}: Props) => {
   return (
      <div className={s.infoContainer}>
          <span>
                        Date of Birth: 27 january
               </span>
         <span>
                        City: Osipovichi
               </span>
         <span>
                        Education: OGPTK`18
               </span>
         <span>Web Site: {profile.contacts?.website ? profile.contacts.website : '-'}
               </span>
      </div>
   );
};

