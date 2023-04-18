import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

type UsersProps = {
    user: UserType
    followingInProgress: number[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User = ({user, followingInProgress, unfollow, follow}: UsersProps) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}> UnFollow </button>

                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </span>
            <span>
                <span className={s.info}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location?.city}</div>
                    <div>{user.location?.country}</div>
                </span>
            </span>
        </div>
    )
}

export default User;