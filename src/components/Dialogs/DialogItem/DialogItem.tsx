import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    id: number,
    name: string
}

const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog}>
        <img
            src="https://t4.ftcdn.net/jpg/04/83/90/87/360_F_483908734_Fn5m2DUij8ijZHgD95HgMLty2kOVZ7hA.png"
            alt="avatar"/>
        <NavLink to={path} className={s.navName}>{props.name}</NavLink>
    </div>
}

export default DialogItem;