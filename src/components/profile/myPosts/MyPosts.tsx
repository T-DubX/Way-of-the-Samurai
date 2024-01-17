import React, {FC, memo} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./posts/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostFormDataType, AddPostFromRedux} from "./addPost/AddPost";


export const MyPosts: FC<MyPostsPropsType> = memo((props) => {
   console.log('render')
   const postsElements: JSX.Element[] = props.posts.map(post => <Post
      key={post.id}
      message={post.message}
      likeCount={post.likesCount}
   />)

   const addNewPost = (values: AddPostFormDataType) => {
      props.addPost(values.newPostText)
   }

   return (
      <div className={s.wrapperPosts}>
         <h3>My posts</h3>
         <AddPostFromRedux onSubmit={addNewPost}/>
         <div className={s.posts}>
            {
               postsElements
            }
         </div>
      </div>
   );
});

