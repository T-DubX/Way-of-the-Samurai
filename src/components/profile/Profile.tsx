import React, {FC, ReactNode} from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {PostsType} from "./myPosts/posts/Post";
import {ProfileUser} from "./ProfileContainer";
import { FormDataType } from './profileInfo/profileDataForm/ProfileDataForm';

export type ProfilePageType = {
   posts: PostsType[]
   newPostText?: string
   profile: ProfileUser | null
   status: string
}

type ProfilePageProps = {
   profile: ProfileUser | null
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (file: File) => void
   saveProfile: (profile: FormDataType) => Promise<any>;
}

export const Profile: FC<ProfilePageProps> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
   return (
      <div>
         <ProfileInfo 
          profile={profile}
          status={status} 
          updateStatus={updateStatus} 
          isOwner={isOwner}
          savePhoto={savePhoto} 
          saveProfile={saveProfile}/>
         <MyPostsContainer
         />
      </div>
   );
};

