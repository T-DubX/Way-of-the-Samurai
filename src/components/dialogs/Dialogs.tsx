import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

type DialogsPropsType = {}

export const Dialogs: FC<DialogsPropsType> = (props) => {
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

