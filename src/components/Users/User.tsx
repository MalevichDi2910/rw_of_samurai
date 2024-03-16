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
        <div className={s.wrapper}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div className={s.name}>
                     {user.name}
                </div>
                <div>
                    {user.followed
                        ? <button className={s.btnFollow} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}> UnFollow </button>

                        : <button className={s.btnFollow} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
                <div className={s.status}>
                    {user.status}
                </div>
                <div className={s.info}>
                    <div>{user.location?.city}</div>
                    <div>{user.location?.country}</div>
                </div>
        </div>
    )
}

export default User;