import { Dispatch } from "redux";
import { authAPI, LoginParamsType, securityAPI } from "../api/api";
import { AppDispatch } from "./store";
import { stopSubmit } from "redux-form";

export type InitialStateType = {
   userId: number | null;
   email: string | null;
   login: string | null;
   isFetching: boolean;
   isAuth: boolean;
   captchaUrl: string | null;
};

export const initialState: InitialStateType = {
   userId: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false,
   captchaUrl: null,
};

export const authReducer = (
   state = initialState,
   action: ActionType
): InitialStateType => {
   switch (action.type) {
      case "samurai-network/SET-USER-DATE": {
         return {
            ...state,
            ...action.payload,
         };
      }
      case "GET-CAPTCHA-URL-SUCCESS": {
         return {
            ...state,
            captchaUrl: action.payload.url
         };
      }
      default:
         return state;
   }
};

export type ActionType = SetUserData | GetCaptchaUrlSuccess;

type SetUserData = ReturnType<typeof setAuthUserData>;
type GetCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>;
export const setAuthUserData = (
   userId: number | null,
   email: string | null,
   login: string | null,
   isAuth: boolean
) => {
   return {
      type: "samurai-network/SET-USER-DATE",
      payload: { userId, email, login, isAuth },
   } as const;
};
export const getCaptchaUrlSuccess = (url: string) => {
   return { type: "GET-CAPTCHA-URL-SUCCESS", payload: { url } } as const;
};

//THUNK

export const getAuthUserData = () => async (dispatch: Dispatch) => {
   const res = await authAPI.getMyProfile();

   if (res.data.resultCode === 0) {
      const { id, login, email } = res.data.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
};
export const login =
   (params: LoginParamsType) => async (dispatch: AppDispatch) => {
      const res = await authAPI.login(params);

      if (res.data.resultCode === 0) {
         dispatch(getAuthUserData());
      } else {
         if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
         }
         const message =
            res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
         dispatch(stopSubmit("login", { _error: message }));
      }
   };

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
   const res = await securityAPI.getCaptchaUrl();
   const captchaUrl = res.data.url;

   dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: AppDispatch) => {
   const res = await authAPI.logout();

   if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
};
