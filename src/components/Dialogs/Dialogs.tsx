import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import {InitialStateType} from "../../redux/dialogs-reducer";
import {AddMessageForm} from "./Message/AddMessageForm";

type DialogsPropsType = {
    dialogsPage: InitialStateType,
    sendMessage: (newMessageBody: string) => void,
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

type FormDataType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (values: FormDataType) => {
        console.log(values)
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;





