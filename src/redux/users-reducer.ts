import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type UserLocationType = {
   city: string
   country: string
}

export type UserType = {
   name: string,
   id: number,
   uniqueUrlName: string | null,
   photos: {
      "small": string | null,
      "large": string | null
   },
   status: string | null,
   followed: boolean
}

export type InitialUsersStateType = typeof initialState

export const initialState = {
   users: [] as UserType[],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [] as number[] | never[]
}

export const usersReducer = (state = initialState, action: ActionType): InitialUsersStateType => {
   switch (action.type) {
      case "FOLLOW": {
         return {
            ...state,
            users: state.users
               .map(u => u.id === action.userId
                  ? {...u, followed: true}
                  : u)
         }
      }
      case "UNFOLLOW": {
         return {
            ...state,
            users: state.users
               .map(u => u.id === action.userId
                  ? {...u, followed: false}
                  : u)
         }
      }
      case "SET-USERS": {
         return {...state, users: action.users}
      }
      case "SET-CURRENT-PAGE": {
         return {...state, currentPage: action.page}
      }
      case "SET-TOTAL-USERS-COUNT": {
         return {...state, totalUsersCount: action.count}
      }
      case "TOGGLE-IS-FETCHING": {
         return {...state, isFetching: action.isFetching}
      }
      case "TOGGLE-FOLLOWING-PROGRESS": {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id !== action.userId)
         }
      }
      default:
         return state
   }
}

export type ActionType = FollowSuccessAT
   | UnfollowSuccessAT
   | SetUsersAT
   | SetCurrentPageAT
   | SetTotalUsersCountAT
   | ToggleIsFetching
   | toggleFollowingProgressAT

type FollowSuccessAT = ReturnType<typeof followSuccess>
type UnfollowSuccessAT = ReturnType<typeof unfollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetching = ReturnType<typeof toggleIsFetching>
type toggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => {
   return {type: 'FOLLOW', userId} as const
}
export const unfollowSuccess = (userId: number) => {
   return {type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: UserType[]) => {
   return {type: 'SET-USERS', users} as const
}

export const setCurrentPage = (page: number) => {
   return {type: 'SET-CURRENT-PAGE', page} as const
}

export const setTotalUsersCount = (count: number) => {
   return {type: 'SET-TOTAL-USERS-COUNT', count} as const
}

export const toggleIsFetching = (isFetching: boolean) => {
   return {type: 'TOGGLE-IS-FETCHING', isFetching} as const
}

export const toggleFollowingProgress = (userId: number, isFetching: boolean) => {
   return {type: 'TOGGLE-FOLLOWING-PROGRESS', userId, isFetching} as const
}


//THUNK

export const requestUsers = (page: number, pageSize: number) => {

   return (dispatch: Dispatch) => {
      dispatch(toggleIsFetching(true))
      dispatch(setCurrentPage(page))

      usersAPI.getUsers(page, pageSize)
         .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
         })
   }
}

export const follow = (userId: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleFollowingProgress(userId, true))
      usersAPI.follow(userId)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(userId, false))
         })
   }
}

export const unfollow = (userId: number) => {
   return (dispatch: Dispatch) => {
      dispatch(toggleFollowingProgress(userId, true))
      usersAPI.unfollow(userId)
         .then(data => {
            if (data.resultCode === 0) {
               dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(userId, false))
         })
   }
}