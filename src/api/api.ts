import axios from "axios";
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

export type FollowResponseType<D = {}> = {
    data: D
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType<UserType[]>>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<FollowResponseType>(`/follow/${userId}`)
            .then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<FollowResponseType>(`/follow/${userId}`)
            .then(res => res.data)
    },
    getProfile(userId: number) {
        return instance.get<ProfileUser>(`/profile/${userId}`)
            .then(res => res.data)
    },
}
export const authAPI = {
    getMyProfile() {
        return instance.get(`/auth/me`)

    }
}

