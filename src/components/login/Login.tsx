import React from 'react';
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {FormControl} from "../common/formsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/validadtors";

type FormDataType = WrappedFieldProps & {
   login: string
   password: string
   rememberMe: boolean
}

const maxLength = maxLengthCreator(30)
const minLength5 = minLengthCreator(5)

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={'login'}
                   component={FormControl}
                   tagName={'input'}
                   name={'login'}
                   validate={[requiredField, maxLength]}
            />
         </div>
         <div>
            <Field placeholder={'password'}
                   component={FormControl}
                   tagName={'input'}
                   name={'password'}
                   validate={[requiredField, minLength5]}
            />
         </div>
         <div>
            <Field component={'input'}
                   type="checkbox"
                   name={'rememberMe'}
            />
            remember me
         </div>
         <div>
            <button>login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)

export const Login = () => {
   const onSubmit = (formData: FormDataType) => {
      console.log(formData)
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   );
};