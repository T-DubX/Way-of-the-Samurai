import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../api/api";
import {AppDispatch} from "./store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
   userId: number | null,
   email: string | null,
   login: string | null,
   isFetching: boolean,
   isAuth: boolean
}

export const initialState: InitialStateType = {
   userId: null,
   email: null,
   login: null,
   isFetching: false,
   isAuth: false
}

export const authReducer = (state = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case "SET-USER-DATE": {
         return {
            ...state,
            ...action.payload,
         }
      }
      default:
         return state
   }
}

export type ActionType = SetUserData

type SetUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
   return {type: 'SET-USER-DATE', payload: {userId, email, login, isAuth}} as const
}


//THUNK

export const getAuthUserData = () => {
   return (dispatch: Dispatch) => {
      return authAPI.getMyProfile()
         .then(res => {
            if (res.data.resultCode === 0) {
               const {id, login, email} = res.data.data
               dispatch(setAuthUserData(id, email, login, true))
            }
         })
   }
}
export const login = (params: LoginParamsType) => (dispatch: AppDispatch) => {
   authAPI.login(params).then(res => {
      if (res.data.resultCode === 0) {
         dispatch(getAuthUserData())
      } else {
         const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
         dispatch(stopSubmit('login', {_error: message}))
      }
   })
}

export const logout = () => (dispatch: AppDispatch) => {
   authAPI.logout().then(res => {
      if (res.data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}