import React from 'react';
import s from './Post.module.css'
import userPhoto from "../../../../assets/images/user.png";
import {ProfileType} from "./../../ProfileInfo/ProfileInfo";

type PostPropsType = {
    message: string
    like: number
    date: string
    profile: ProfileType
}

const Post = ({message, like, date, profile}: PostPropsType) => {
    return (
        <div className={s.item}>
            <img alt='' src={profile?.photos.large || userPhoto}></img>
            <div className={s.date}>{date}</div>
            <div className={s.message}>{message}</div>
            <div>
                <span className={s.like}>{like} like</span>
            </div>
        </div>
    )
}

export default Post;