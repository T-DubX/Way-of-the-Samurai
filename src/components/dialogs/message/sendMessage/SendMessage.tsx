import React from 'react';
import s from './SendMessage.module.css'

export const SendMessage = () => {
    return (
        <div className={s.wrapper}>
            <textarea placeholder='your message...'></textarea>
            <button className={s.sandBtn}>Sand</button>
        </div>
    );
};

