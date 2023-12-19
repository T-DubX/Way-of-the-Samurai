import React, {FC} from 'react';
import logo from '../../assets/images/logo.svg'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth?: boolean
    login?: string
}

export const Header: FC<PropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>

            <div className={s.loginBlock}>
                {isAuth ? login : <NavLink to={'/login'}>
                    Login
                </NavLink>}
            </div>
        </header>
    );
};