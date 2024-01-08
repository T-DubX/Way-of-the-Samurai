import React, {FC} from 'react';
import s from "../MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormDataType = {
   newPostText: string
}

export const AddPost: FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.newPost}>
         <Field name={'newPostText'}
                component={'textarea'}
                placeholder={'Enter your news...'}
         />
         <button className={s.btn}
         >Add post
         </button>
      </form>
   )
};

export const AddPostFromRedux = reduxForm<AddPostFormDataType>({
   form: 'profileAddNewPostForm'
})(AddPost)
