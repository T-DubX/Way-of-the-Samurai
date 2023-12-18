import {ProfilePageType} from "../components/profile/Profile";
import {ProfileUser} from "../components/profile/ProfileContainer";

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

type ActionType = UpdateNewPostTextActionType
    | AddPostActionType
    | SetUserProfileActionType

type InitialStateType = ProfilePageType


const initialState: InitialStateType = {
    posts: [
        {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
        {id: '2', message: 'It`s my first posts', likesCount: 11},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: '5',
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
export const setUserProfile = (profile: ProfileUser) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}