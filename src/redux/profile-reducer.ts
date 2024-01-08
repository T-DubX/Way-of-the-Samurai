import {ProfilePageType} from "../components/profile/Profile";
import {ProfileUser} from "../components/profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>

type ActionType =
   AddPostActionType
   | SetUserProfileActionType
   | SetStatusActionType

type InitialStateType = ProfilePageType


const initialState = {
   posts: [
      {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
      {id: '2', message: 'It`s my first posts', likesCount: 11},
   ],
   profile: null,
   status: '',
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
   switch (action.type) {
      case "ADD-POST": {
         const newPost = {
            id: '5',
            message: action.newPostText,
            likesCount: 0
         }

         return {
            ...state,
            posts: [newPost, ...state.posts],
            newPostText: ''
         }
      }
      case "SET-USER-PROFILE": {
         return {
            ...state,
            profile: action.profile
         }
      }
      case "SET-STATUS": {
         return {
            ...state,
            status: action.status
         }
      }
      default:
         return state
   }
}

export const addPostAC = (newPostText: string) => {
   return {type: "ADD-POST", newPostText} as const
}
export const setUserProfile = (profile: ProfileUser) => {
   return {type: 'SET-USER-PROFILE', profile} as const
}
export const setStatus = (status: string) => {
   return {
      type: 'SET-STATUS', status
   } as const
}


//THUNK

export const getUserProfile = (userId: number) => {
   return (dispatch: Dispatch) => {
      profileAPI.getProfile(userId)
         .then(data => {
            dispatch(setUserProfile(data))
         })
   }
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
   profileAPI.getStatus(userId)
      .then(res => {
         dispatch(setStatus(res.data))
      })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
   profileAPI.updateStatus(status)
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      })
}