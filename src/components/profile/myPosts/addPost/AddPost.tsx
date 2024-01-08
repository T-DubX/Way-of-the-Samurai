import React, {FC} from 'react';
import s from "../MyPosts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validadtors";
import {FormControl} from "../../../common/formsControls/FormsControls";


export type AddPostFormDataType = {
   newPostText: string
}

const maxLength30 = maxLengthCreator(30)

export const AddPost: FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.newPost}>
         <Field name={'newPostText'}
                component={FormControl}
                tagName={'textarea'}
                placeholder={'Enter your news...'}
                validate={[requiredField, maxLength30]}
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
