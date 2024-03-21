import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileUser} from "../components/profile/ProfileContainer";
import { FormDataType } from "../components/profile/profileInfo/profileDataForm/ProfileDataForm";

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   withCredentials: true,
})

export type UsersResponseType<I = {}> = {
   totalCount: number
   error: null | string
   items: I
}

export type ResponseType<D = {}> = {
   data: D
   fieldsErrors: string[]
   messages: string[]
   resultCode: number
}

export type LoginParamsType = {
   email: string
   password: string
   rememberMe: boolean
   captcha: string
}

export type StatusResponseType = Omit<ResponseType, 'fieldsErrors'>

export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get<UsersResponseType<UserType[]>>(`/users?page=${currentPage}&count=${pageSize}`)
         .then(res => res.data)
   },
   follow(userId: number) {
      return instance.post<ResponseType>(`/follow/${userId}`)
         .then(res => res.data)
   },
   unfollow(userId: number) {
      return instance.delete<ResponseType>(`/follow/${userId}`)
         .then(res => res.data)
   },

}
export const profileAPI = {
   getProfile(userId: number) {
      return instance.get<ProfileUser>(`/profile/${userId}`)
         .then(res => res.data)
   },
   getStatus(userId: number) {
      return instance.get<string>(`/profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put<StatusResponseType>('profile/status', {status})
   },
   savePhoto(photoFile: File) {
      const formData: FormData = new FormData()
      formData.append('image', photoFile)
      return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
   },
   saveProfile(profile: FormDataType) {
      return instance.put<ResponseType<ProfileUser>>('profile', profile)
   }
}

export const authAPI = {
   getMyProfile() {
      return instance.get<ResponseType<{ id: number, email: string, login: string }>>(`/auth/me`)

   },
   login(params: LoginParamsType) {
      return instance.post<ResponseType<{ userId: number }>>('/auth/login', params)
   },
   logout() {
      return instance.delete<ResponseType>('/auth/login')
   }
}

export const securityAPI = {
   getCaptchaUrl() {
      return instance.get<{url: string}>(`/security/get-captcha-url`)
   }
}

