import {ActionType} from "./store";
import {DialogsPageType} from "../components/dialogs/Dialogs";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>

// export type DialogsPage = {
//     messages: MessageDataType[]
//     dialogs: DialogsDataType[]
//     newMessageText: string
// }

type InitialStateType = DialogsPageType

const initialState: InitialStateType = {
    messages: [
        {id: '1', message: 'Hello world'},
        {id: '2', message: 'I am from Belarus'},
        {id: '3', message: 'How are you?'},
    ],
    dialogs: [
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Valera'},
        {id: '4', name: 'Pasha'},
        {id: '5', name: 'Viktoria'},
        {id: '6', name: 'Ekaterina'},
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const copyState = {...state}
            const body = copyState.newMessageText
            copyState.newMessageText = ''
            copyState.messages.push({id: '6', message: body})
            return copyState
        }
        case "UPDATE-NEW-MESSAGE-BODY": {
            const copyState = {...state}
            copyState.newMessageText = action.message
            return copyState
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