import React, {FC} from 'react';
import s from './Message.module.css';

export type MessageDataType = {
    id: string
    message: string
}

type MessagesPropsType = {
    message: string
}

export const Message: FC<MessagesPropsType> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.userAvatar}></div>
            <div className={s.messageWrapper}>
                <div className={s.message}>{props.message}</div>
            </div>

        </div>

    );
};

