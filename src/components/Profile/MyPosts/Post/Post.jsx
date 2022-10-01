import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='' src='https://www.1zoom.ru/big2/856/329183-alexfas01.jpg'></img>
            {props.message}
            <div>
                <span>like</span> { props.like }
            </div>
        </div>
    )
}

export default Post;