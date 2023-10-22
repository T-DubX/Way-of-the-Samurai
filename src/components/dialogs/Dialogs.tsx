import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsDataType} from "./dialogItem/DialogItem";
import {Message, MessageDataType} from "./message/Message";


type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessageDataType[]
}

export const Dialogs: FC<DialogsPropsType> = (props) => {

    const dialogsElements: JSX.Element[] = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    const messagesElements: JSX.Element[] = props.messages.map(message => <Message message={message.message}/>)

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

