import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";

const Header = (props: MapStateToPropsType & {logoutTC:() => void} ) => {
    return <>
        <header className={s.header}>
            <img alt='' src='https://i.pinimg.com/474x/d3/0a/19/d30a19c7f5c494218deb98202f3f6422.jpg'/>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logoutTC}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    </>
}

export default Header;