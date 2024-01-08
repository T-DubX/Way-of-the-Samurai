import React, {FC} from 'react';
import s from './AddMessage.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormDataType = {
   newMessageBody: string
}


export const AddMessage: FC<InjectedFormProps<FormDataType>> = (props) => {

   return (
      <form onSubmit={props.handleSubmit} className={s.wrapper}>
         <Field component={'textarea'} name={'newMessageBody'}
                placeholder={'Enter your message'}
         />
         <button
            className={s.sandBtn}
         >Sand
         </button>
      </form>
   );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessage)

