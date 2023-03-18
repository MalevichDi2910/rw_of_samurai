import {useForm} from "react-hook-form";
import style from "../../Profile/MyPosts/MyPosts.module.css";
import s from "../Dialogs.module.css";
import React from "react";

type DialogFormProps = {
    newMessageBody?: string
    onSubmit: (values: any) => void
}

export const AddMessageForm = (props: DialogFormProps) => {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                     <textarea
                         {...register("newMessageBody", {
                             required: 'Field is required'
                         })}
                         placeholder={'Enter your message'}
                     />
            </div>
            {errors.newMessageBody && <span className={style.errorSpan} role="alert">{errors.newMessageBody.message?.toString()}</span>}
            <div>
                <input className={s.addButton} type="submit" value={'Send'}/>
            </div>
        </form>
    )
}