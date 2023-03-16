import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css"
import {InitialStateType} from "../../redux/dialogs-reducer";
import {useForm} from "react-hook-form";

type DialogsPropsType = {
    dialogsPage: InitialStateType,
    sendMessage: (newMessageBody: string) => void,
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    const addNewMessage = (values: any) => { // ТИПИЗАЦИЯ !!!!!!!!!!!!!!!!!! (FormDataType)
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

type DialogFormProps = {
    newMessageBody?: string
    onSubmit: (values: any) => void
}

const AddMessageForm = (props: DialogFormProps) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
                <div>
                     <textarea
                         {...register("newMessageBody", {})}
                         placeholder={'Enter your message'}
                     />
                </div>
            <div>
                <input className={s.addButton} type="submit" value={'Send'}/>
            </div>
        </form>
    )
}

export default Dialogs;





