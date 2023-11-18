import {ActionType} from "./state";
import {PostsType} from "../components/profile/myPosts/posts/Post";

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: '1', message: 'It`s our new program! Hey!', likesCount: 12},
        {id: '2', message: 'It`s my first posts', likesCount: 11},
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: '5',
                message: state.newPostText,
                likesCount: 0
            }

            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.newText
            return state
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