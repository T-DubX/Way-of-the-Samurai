import React, {ChangeEvent, FC} from 'react';
import s from './SendMessage.module.css'
import {addMessageAC, updateNewMessageBodyAC} from "../../../../redux/dialogs-reducer";
import {ActionType} from "../../../../redux/store";


type PropsType = {
    newMessageText: string
    dispatch: (action: ActionType) => void;
}

export const SendMessage: FC<PropsType> = (props) => {

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.target.value
        props.dispatch(updateNewMessageBodyAC(message))
    }

    const onSendMessageClick = () => {
        props.dispatch(addMessageAC())
        props.dispatch(updateNewMessageBodyAC(''))
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

