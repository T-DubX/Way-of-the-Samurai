import {ActionType} from "./state";
import {MessageDataType} from "../components/dialogs/message/Message";
import {DialogsDataType} from "../components/dialogs/dialogItem/DialogItem";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type DialogsPage = {
    messages: MessageDataType[]
    dialogs: DialogsDataType[]
    newMessageText: string
}

const initialState: DialogsPage = {
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

export const dialogsReducer = (state = initialState, action: ActionType): DialogsPage => {
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