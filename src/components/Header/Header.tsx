import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";

const Header = (props: MapStateToPropsType & {logoutTC:() => void} ) => {
    return <>
        <header className={s.header}>
            <span className={s.logo}><img alt='' src='https://cryptologos.cc/logos/polygon-matic-logo.png'/></span>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button className={s.btn} onClick={props.logoutTC}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </>
}

export default Header;