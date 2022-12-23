import React from "react";
import s from "./Users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

type UsersProps = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>

            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'./../profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> UnFollow </button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

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
        </div>)
}


export default Users;