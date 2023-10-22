import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

type DialogsDataType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    message: string
}

type DialogsPropsType = {}

export const Dialogs: FC<DialogsPropsType> = (props) => {

    const dialogsData: DialogsDataType[] = [
        {id: 1, name: 'Anton'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Pasha'},
        {id: 5, name: 'Viktoria'},
        {id: 6, name: 'Ekaterina'},
    ]

    const messageData: MessageDataType[] = [
        {id: 1, message: 'Hello world'},
        {id: 2, message: 'I am from Belarus'},
        {id: 3, message: 'How are you?'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={'1'} name={'Anton'}/>
                <DialogItem id={'2'} name={'Alex'}/>
                <DialogItem id={'3'} name={'Valera'}/>
                <DialogItem id={'4'} name={'Pasha'}/>
                <DialogItem id={'5'} name={'Viktoria'}/>
                <DialogItem id={'6'} name={'Ekaterina'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello world'}/>
                <Message message={'I am from Belarus'}/>
                <Message message={'How are you?'}/>
            </div>
        </div>
    );
};

