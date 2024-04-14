import React from "react";
import s from "./../Dialogs.module.css"

type MessagePropsType = {
    message: string
    name:string
}

const Message = (props: MessagePropsType) => {

    return (
        <>
                <div className={s.message}>
                    <img
                        src='https://t4.ftcdn.net/jpg/04/83/90/87/360_F_483908734_Fn5m2DUij8ijZHgD95HgMLty2kOVZ7hA.png'
                        alt={'logo'} className={s.image}/>

                    <div className={s.textWrap}>
                            <div className={s.name}>{props.name}</div>
                            <div className={s.text}>{props.message}</div>
                    </div>
                </div>
        </>
    )
}

export default Message;