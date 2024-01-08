import {AppStateType} from "./store";

export const getUsers = (state: AppStateType) => {
   return state.usersPage
}

export const getPageSize = (state: AppStateType) => {
   return state.usersPage.pageSize
}

export const totalUsersCount = (state: AppStateType) => {
   return state.usersPage.totalUsersCount
}

export const currentPage = (state: AppStateType) => {
   return state.usersPage.currentPage
}

export const isFetching = (state: AppStateType) => {
   return state.usersPage.isFetching
}

export const followingInProgress = (state: AppStateType) => {
   return state.usersPage.followingInProgress
}