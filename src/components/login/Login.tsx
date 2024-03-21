import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormControl } from "../common/formsControls/FormsControls";
import {
   maxLengthCreator,
   minLengthCreator,
   requiredField,
} from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { LoginParamsType } from "../../api/api";
import { AppStateType } from "../../redux/store";
import { Redirect } from "react-router-dom";
import styles from "../../components/common/formsControls/FormsControls.module.css";

type FormDataType = {
   login: string;
   password: string;
   rememberMe: boolean;
   captcha: string;
};

interface LoginFormProps extends InjectedFormProps<FormDataType> {
   captchaUrl: string | null;
 }

type LoginPropsType = {
   login: (params: LoginParamsType) => void;
   isAuth: boolean | null;
   captcha?: string | null;
};

const maxLength = maxLengthCreator(30);
const minLength5 = minLengthCreator(5);

const LoginForm: React.FC<LoginFormProps> = ({
   handleSubmit,
   error,
   captchaUrl,
}) => {

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <Field
               placeholder={"login"}
               component={FormControl}
               tagName={"input"}
               name={"login"}
               validate={[requiredField, maxLength]}
            />
         </div>
         <div>
            <Field
               placeholder={"password"}
               component={FormControl}
               tagName={"input"}
               type={"password"}
               name={"password"}
               validate={[requiredField, minLength5]}
            />
         </div>
         <div style={{ display: "flex", gap: "5px" }}>
            <Field
               component={FormControl}
               tagName={"input"}
               type="checkbox"
               name={"rememberMe"}
            />
            remember me
         </div>
         {captchaUrl && (
            <div>
               <img src={captchaUrl} alt="Captcha" />
               <Field
                  placeholder={"captcha"}
                  component={FormControl}
                  tagName={"input"}
                  type={"text"}
                  name={"captcha"}
                  validate={[requiredField]}
               />
            </div>
         )}

         {error && <div className={styles.formSummaryError}>{error}</div>}

         <div>
            <button>login</button>
         </div>
      </form>
   );
};

const LoginReduxForm = reduxForm<FormDataType, any>({
   form: "login",
})(LoginForm);

const _Login: FC<LoginPropsType> = (props) => {
   const onSubmit = (formData: FormDataType) => {
      console.log(formData);
      props.login({
         email: formData.login,
         password: formData.password,
         rememberMe: formData.rememberMe,
         captcha: formData.captcha,
      });
   };

   if (props.isAuth) {
      return <Redirect to={"/profile"} />;
   }

   return (
      <div>
         <h1>Login</h1>
         <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captcha} />
      </div>
   );
};

type MapStateToProps = {
   isAuth: boolean;
   captchaUrl: string | null;
};

const mapStateToProps = (state: AppStateType): MapStateToProps => {
   return {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl,
   };
};

export const Login = connect(mapStateToProps, { login })(_Login);
