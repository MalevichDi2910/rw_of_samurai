import {useForm} from "react-hook-form";
import style from "./MyPosts.module.css";
import React from "react";

type MyPostsFormProps = {
    onSubmit: (values: any) => void
}

export const AddNewPostForm = (props: MyPostsFormProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
            <textarea
                {...register("newPostText", {
                    required: 'Field is required'
                })}
                placeholder={'Post message'}
            />
            </div>
            {errors.newPostText && <span className={style.errorSpan} role="alert">{errors.newPostText.message?.toString()}</span>}
            <div>
                <input type="submit" value={'Add post'}/>
            </div>
        </form>
    )
}