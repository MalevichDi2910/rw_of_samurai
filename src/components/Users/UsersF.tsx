import React from "react";
import s from './Users.module.css'
import {UsersAPIComponentPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

const UsersF = (props: UsersAPIComponentPropsType) => {

    let getUsers = () => {

        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    console.log(response.data.items)
                    props.setUsers(response.data.items)
                })
        }
    }

    return <div>
        <button onClick={getUsers}>get users</button>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img alt={'photo'} src={ u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unfollow(u.id) } }> UnFollow </button>
                                : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }

                        </div>
                    </span>
                    <span>
                        <span>
                        <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                        <div>{u.location?.city}</div>
                            <div>{u.location?.country}</div>
                    </span>
                        </span>
                </div>
            )}
                </div>
            };

export default UsersF;