import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm, WrappedFieldProps} from "redux-form";
import {FormControl} from "../common/formsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {LoginParamsType} from "../../api/api";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import styles from '../../components/common/formsControls/FormsControls.module.css'

type FormDataType = WrappedFieldProps & {
   login: string
   password: string
   rememberMe: boolean
}

type LoginPropsType = {
   login: (params: LoginParamsType) => void
   isAuth: boolean | null
}

const maxLength = maxLengthCreator(30)
const minLength5 = minLengthCreator(5)

const LoginForm = ({handleSubmit, error}: InjectedFormProps<FormDataType>) => {
   return (
      <form onSubmit={handleSubmit}>
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
                   type={'password'}
                   name={'password'}
                   validate={[requiredField, minLength5]}
            />
         </div>
         <div style={{display: 'flex', gap: '5px'}}>
            <Field component={FormControl}
                   tagName={'input'}
                   type="checkbox"
                   name={'rememberMe'}
            /> remember me
         </div>
         {error &&
             <div className={styles.formSummaryError}>
                {error}
             </div>
         }

         <div>
            <button>login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm<FormDataType>({
   form: 'login'
})(LoginForm)

const _Login: FC<LoginPropsType> = (props) => {
   const onSubmit = (formData: FormDataType) => {
      props.login({email: formData.login, password: formData.password, rememberMe: formData.rememberMe})
   }

   if (props.isAuth) {
      return <Redirect to={'/profile'}/>
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit}/>
      </div>
   );
};

type MapStateToProps = {
   isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
   return {
      isAuth: state.auth.isAuth
   }
}

export const Login = connect(mapStateToProps, {login})(_Login)