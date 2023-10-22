import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

type DialogsDataType = {
    id: string
    name: string
}

type MessageDataType = {
    id: string
    message: string
}

type DialogsPropsType = {}

export const Dialogs: FC<DialogsPropsType> = (props) => {

    const dialogs: DialogsDataType[] = [
        {id: '1', name: 'Anton'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Valera'},
        {id: '4', name: 'Pasha'},
        {id: '5', name: 'Viktoria'},
        {id: '6', name: 'Ekaterina'},
    ]

    const messages: MessageDataType[] = [
        {id: '1', message: 'Hello world'},
        {id: '2', message: 'I am from Belarus'},
        {id: '3', message: 'How are you?'},
    ]

    const dialogsElements: JSX.Element[] = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesElements: JSX.Element[] = messages.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

