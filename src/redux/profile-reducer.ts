import {PostsType} from "../components/profile/myPosts/posts/Post";
import {ActionType} from "./store";
import {ProfilePageType} from "../components/profile/Profile";

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>

type InitialStateType = ProfilePageType

const initialState: InitialStateType = {
    posts: [
        {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
        {id: '2', message: 'It`s my first posts', likesCount: 11},
    ],
    newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {

            const copyState = {...state}
            const newPost = {
                id: '5',
                message: state.newPostText,
                likesCount: 0
            }


            copyState.posts.push(newPost)
            copyState.newPostText = ''
            return copyState
        }
        case 'UPDATE-NEW-POST-TEXT': {
            const copyState = {...state}
            copyState.newPostText = action.newText
            return copyState
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