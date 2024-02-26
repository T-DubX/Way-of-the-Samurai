import React, {FC} from "react";
import {WrappedFieldProps} from "redux-form";
import styles from './FormsControls.module.css'

export type TagName = 'textarea' | 'input'

type FormControlProps = {
   tagName: TagName
} & WrappedFieldProps

export const FormControl: FC<FormControlProps> = ({input, meta, tagName, ...props}) => {
   const hasError = meta.touched && meta.error;
   const Tag = tagName;

   return (
      <>
         <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
               <Tag {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
         </div>
      </>
   );
};