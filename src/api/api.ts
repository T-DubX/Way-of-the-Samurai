import axios, {AxiosResponse} from "axios";
import {UserType} from "../redux/users-reducer";
import {ProfileUser} from "../components/profile/ProfileContainer";

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
      return instance.get<string>(`profile/status/${userId}`)
   },
   updateStatus(status: string) {
      return instance.put<StatusResponseType>('profile/status', {status})
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

