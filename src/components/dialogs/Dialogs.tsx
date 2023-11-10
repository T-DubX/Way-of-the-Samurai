import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {StoreType} from "../../redux/state";
import {SendMessage} from "./message/sendMessage/SendMessage";


type DialogsPropsType = {
    store: StoreType
}

export const Dialogs: FC<DialogsPropsType> = (props) => {
    let state = props.store.getState().dialogsPage

    const dialogsElements: JSX.Element[] = state.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                                                   name={dialog.name}/>)

    const messagesElements: JSX.Element[] = state.messages.map(message => <Message
        key={message.id}
        message={message.message}
    />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <SendMessage
                    store={props.store}
                    newMessageText={state.newMessageText}
                />
            </div>
        </div>
    );
};

