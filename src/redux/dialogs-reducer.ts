import {DialogsPageType} from "../components/dialogs/Dialogs";

export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>

export type ActionType = UpdateNewMessageBodyActionType
    | AddMessageActionType

type MessageType = {
    id: string
    message: string
}

type DialogsType = {
    id: string
    name: string
}

type InitialStateType = typeof initialState

const initialState = {
    messages: [
        {id: '1', message: 'Hello world'},
        {id: '2', message: 'I am from Belarus'},
        {id: '3', message: 'How are you?'},
    ] as MessageType[],
    dialogs: [
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Valera'},
        {id: '4', name: 'Pasha'},
        {id: '5', name: 'Viktoria'},
        {id: '6', name: 'Ekaterina'},
    ] as DialogsType[],
    newMessageText: '',
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            const body = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: '6', message: body}],
                newMessageText: ''
            }
        }
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {
                ...state,
                newMessageText: action.message
            }

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