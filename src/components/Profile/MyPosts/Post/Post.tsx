import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img alt='' src='https://www.1zoom.ru/big2/856/329183-alexfas01.jpg'></img>
            {props.message}
            <div>
                <span> {props.like} like</span>
            </div>
        </div>
    )
}

export default Post;