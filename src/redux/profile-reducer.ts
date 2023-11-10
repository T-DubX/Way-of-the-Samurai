import {ActionType, ProfilePageType} from "./state";

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>


export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
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