import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsDataType} from "./dialogItem/DialogItem";
import {Message, MessageDataType} from "./message/Message";
import {SendMessage} from "./message/sendMessage/SendMessage";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export type DialogsPageType = {
    messages: MessageDataType[]
    dialogs: DialogsDataType[]
    newMessageText: string
}


export const Dialogs: FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage

    const dialogsElements: JSX.Element[] = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                                   name={dialog.name}/>)

    const messagesElements: JSX.Element[] = state.messages.map(message => <Message
        key={message.id}
        message={message.message}
    />)

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <SendMessage
                    dispatch={props.dispatch}
                    newMessageText={state.newMessageText}
                />
            </div>
        </div>
    );
};

