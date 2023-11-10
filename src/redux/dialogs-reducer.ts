import {ActionType, DialogsPage} from "./state";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>


export const dialogsReducer = (state: DialogsPage, action: ActionType): DialogsPage => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: '6', message: body})
            return state
        }
        case "UPDATE-NEW-MESSAGE-BODY": {
            state.newMessageText = action.message
            return state
        }
        default :
            return state
    }
}

export const updateNewMessageBodyAC = (message: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        message
    } as const
}
export const addMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}