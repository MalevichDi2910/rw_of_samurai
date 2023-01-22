import React, {ChangeEvent} from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import {InitialStateType} from "../../redux/dialogs-reducer";
import { Navigate } from "react-router-dom";

type DialogsPropsType = {
    dialogsPage: InitialStateType,
    sendMessage: () => void,
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = (e.currentTarget.value);
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}>
                        </textarea>
                    </div>
                    <div>
                        <button className={s.addButton} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;