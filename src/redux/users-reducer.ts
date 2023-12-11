type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        "small": string | undefined,
        "large": string | undefined
    },
    status: null,
    followed: boolean
}

export type InitialStateType = typeof initialState

export const initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
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
        default:
            return state
    }
}

export type ActionType = FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>

export const followAC = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}

export const setCurrentPageAC = (page: number) => {
    return {type: 'SET-CURRENT-PAGE', page} as const
}

export const setTotalUsersCountAC = (count: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', count} as const
}