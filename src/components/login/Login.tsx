import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props: any) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={'login'} component={'input'} name={'login'}/>
         </div>
         <div>
            <Field placeholder={'password'} component={'input'} name={'password'}/>
         </div>
         <div>
            <Field component={'input'} type="checkbox" name={'rememberMe'}/> remember me
         </div>
         <div>
            <button>login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)

export const Login = () => {
   const onSubmit = (formData: any) => {
      console.log(formData)
   }
   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   );
};