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
    users: [] as UserType[]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export type ActionType = FollowAT
    | UnfollowAT
    | SetUsersAT

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const
}