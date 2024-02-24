import React, {FC, ReactNode} from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {PostsType} from "./myPosts/posts/Post";
import {ProfileUser} from "./ProfileContainer";

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
}

export const Profile: FC<ProfilePageProps> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   return (
      <div>
         <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                      savePhoto={savePhoto}/>
         <MyPostsContainer
         />
      </div>
   );
};

