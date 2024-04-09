import {useForm} from "react-hook-form";
import style from "./MyPosts.module.css";
import React from "react";

type MyPostsFormProps = {
    onSubmit: (values: any) => void
}

export const AddNewPostForm = (props: MyPostsFormProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm();


    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className={style.formWrapper}>
            <div className={style.textarea}>
            <textarea
                {...register("newPostText", {
                    required: 'Field is required'
                })}
                placeholder={'Post message'}
                className={style.postTextarea}
            />
                {errors.newPostText &&
                    <span className={style.errorSpan} role="alert">{errors.newPostText.message?.toString()}</span>}
            </div>
            <div>
                <input className={style.addPostSubmit} type="submit" value={'Add post'}/>
            </div>
            </div>
        </form>
    )
}