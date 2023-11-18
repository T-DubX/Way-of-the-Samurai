import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {SendMessage} from "./message/sendMessage/SendMessage";
import {StoreType} from "../../App";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer: FC<DialogsContainerPropsType> = (props) => {
    let state = props.store.getState().dialogsPage

    return (
        <Dialogs
            dialogsPage={state}
            dispatch={props.store.dispatch}
        />
    );
};

