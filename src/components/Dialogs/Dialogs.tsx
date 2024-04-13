import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import {InitialStateType} from "../../redux/dialogs-reducer";
import {AddMessageForm} from "./Message/AddMessageForm";
import {useAutoAnimate} from "@formkit/auto-animate/react";

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
    const [dialogsRef] = useAutoAnimate<HTMLDivElement>();

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} name={m.name}/>)

    const addNewMessage = (values: FormDataType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogWrap}>
                <span className={s.title}>Dialogs</span>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>
                <div ref={dialogsRef} className={s.messages}>
                    {messagesElements}
                    <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;





