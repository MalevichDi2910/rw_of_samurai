import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number,
    name: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img alt='' src='https://cdn-icons-png.flaticon.com/512/3003/3003035.png'></img>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;