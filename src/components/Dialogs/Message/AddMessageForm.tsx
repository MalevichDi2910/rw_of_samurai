import {useForm} from "react-hook-form";
import s from "../Dialogs.module.css";
import React from "react";

type DialogFormProps = {
    newMessageBody?: string
    onSubmit: (values: any) => void
}

export const AddMessageForm = (props: DialogFormProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={s.formWrapper}>
                <div className={s.textarea}>
                      <textarea
                          {...register("newMessageBody", {
                              required: 'Field is required'
                          })}
                          placeholder={'Enter your message'}
                          className={s.textareaMessage}
                      />
                    {errors.newMessageBody && <span className={s.errorSpan}
                                                    role="alert">{errors.newMessageBody.message?.toString()}</span>}
                </div>
                <div>
                    <input className={s.addButton} type="submit" value={'Send'}/>
                </div>
            </div>
        </form>
    )
}