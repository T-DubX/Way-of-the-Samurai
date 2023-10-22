import React, {FC} from 'react';
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

export type DialogsDataType = {
    id: string
    name: string
}

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem: FC<DialogItemPropsType> = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

