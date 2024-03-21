import React from "react";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'

type UsersProps = {
    currentPage: number
    pageSize: number
    totalItemsCount: number
    users: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    portionSize: number
    followingInProgress: number[]
    follow:(userId: number) => void
    unfollow:(userId: number) => void

}

const Users = ({currentPage, totalItemsCount, onPageChanged, pageSize, users, portionSize, ...props}: UsersProps) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} totalItemsCount={totalItemsCount}
                       onPageChanged={onPageChanged} portionSize={portionSize}/>
            <div className={s.container}>
                {users.map((u: UserType) => <User key={u.id}
                                                  user={u}
                                                  followingInProgress={props.followingInProgress}
                                                  unfollow={props.unfollow}
                                                  follow={props.follow}/>
                )}
            </div>

        </div>
    )
}
export default Users;