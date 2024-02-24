import {ProfilePageType} from "../components/profile/Profile";
import {ProfileUser} from "../components/profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SavePhotoSuccess = ReturnType<typeof savePhotoSuccess>

type ActionType =
   AddPostActionType
   | SetUserProfileActionType
   | SetStatusActionType
   | DeletePostActionType
   | SavePhotoSuccess

export type InitialStateType = ProfilePageType

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
            id: action.id,
            message: action.newPostText,
            likesCount: 0
         }

         return {
            ...state,
            posts: [newPost, ...state.posts],
            newPostText: ''
         }
      }
      case "DELETE-POST": {
         return {
            ...state,
            posts: state.posts.filter(p => p.id !== action.postId)
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
      case "SAVE-PHOTO-SUCCESS": {
         return {
            ...state, profile: {...state.profile, photos: action.photos}
         }
      }
      default:
         return state
   }
}

export const addPostAC = (newPostText: string) => {
   return {type: "ADD-POST", newPostText, id: Date.now().toString()} as const
}

export const deletePost = (postId: string) => {
   return {
      type: 'DELETE-POST', postId
   } as const
}
export const setUserProfile = (profile: ProfileUser) => {
   return {type: 'SET-USER-PROFILE', profile} as const
}
export const setStatus = (status: string) => {
   return {
      type: 'SET-STATUS', status
   } as const
}
export const savePhotoSuccess = (photos: { large: string, small: string }) => {
   return {
      type: 'SAVE-PHOTO-SUCCESS', photos
   } as const
}


//THUNK

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
   const res = await profileAPI.getProfile(userId)

   if (res) {
      dispatch(setUserProfile(res))
   }
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
   const res = await profileAPI.getStatus(userId)
   dispatch(setStatus(res.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
   const res = await profileAPI.updateStatus(status)

   if (res.data.resultCode === 0) {
      dispatch(setStatus(res.status.toString()))
   }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
   const res = await profileAPI.savePhoto(file)

   if (res.data.resultCode === 0) {
      dispatch(savePhotoSuccess(res.data.data.photos))
   }
}