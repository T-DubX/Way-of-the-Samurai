import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
            ...action.data,
            isAuth: true
         }
      }

      default:
         return state
   }
}

export type ActionType = SetUserData

type SetUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => {
   return {type: 'SET-USER-DATE', data: {userId, email, login}} as const
}


//THUNK

export const getAuthUserData = () => {
   return (dispatch: Dispatch) => {
      authAPI.getMyProfile()
         .then(res => {
            if (res.data.resultCode === 0) {
               const {id, login, email} = res.data.data
               dispatch(setAuthUserData(id, email, login))
            }
         })
   }
}