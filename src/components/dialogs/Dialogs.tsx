import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPage} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPage
}

export const Dialogs: FC<DialogsPropsType> = (props) => {

    const dialogsElements: JSX.Element[] = props.state.dialogs.map(dialog => <DialogItem id={dialog.id}
                                                                                         name={dialog.name}/>)

    const messagesElements: JSX.Element[] = props.state.messages.map(message => <Message message={message.message}/>)

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

