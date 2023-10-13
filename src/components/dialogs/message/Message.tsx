import React, {FC} from 'react';
import s from './Message.module.css';

type MessagesPropsType = {
    message: string
}

export const Message: FC<MessagesPropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

