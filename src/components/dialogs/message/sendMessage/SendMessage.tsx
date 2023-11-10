import React, {ChangeEvent, FC} from 'react';
import s from './SendMessage.module.css'
import {addMessageAC, StoreType, updateNewMessageBodyAC} from "../../../../redux/state";

type PropsType = {
    newMessageText: string
    store: StoreType
}

export const SendMessage: FC<PropsType> = (props) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.target.value
        props.store.dispatch(updateNewMessageBodyAC(message))
    }

    const onSendMessageClick = () => {
        props.store.dispatch(addMessageAC())
        props.store.dispatch(updateNewMessageBodyAC(''))
    }

    return (
        <div className={s.wrapper}>
            <textarea
                placeholder='your message...'
                value={props.newMessageText}
                onChange={onMessageChange}
            ></textarea>
            <button
                className={s.sandBtn}
                onClick={onSendMessageClick}
            >Sand
            </button>
        </div>
    );
};

