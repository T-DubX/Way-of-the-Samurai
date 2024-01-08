import React, {FC} from 'react';
import styles from './AddMessage.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../utils/validators/validadtors";
import {FormControl} from "../../../common/formsControls/FormsControls";
// import styles from '../../../../components/common/formsControls/FormsControls'

export type FormDataType = {
   newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

export const AddMessage: FC<InjectedFormProps<FormDataType>> = (props) => {

   return (
      <form onSubmit={props.handleSubmit} className={styles.wrapper}>
         <Field component={FormControl}
                tagName={'textarea'}
                name={'newMessageBody'}
                placeholder={'Enter your message'}
                validate={[requiredField, maxLength100]}
         />

         <button
            className={styles.sandBtn}
         >Sand
         </button>
      </form>
   );
};

export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessage)

