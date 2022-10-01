import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img alt='' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'></img>
        <NavLink to={path}>{props.name}</NavLink>
        <hr/>
    </div>
}

export default DialogItem;