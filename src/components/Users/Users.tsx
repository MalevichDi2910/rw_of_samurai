import React from "react";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersProps = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    users: Array<UserType>
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]
    follow:(userId: number) => void
    unfollow:(userId: number) => void
}

const Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users,  ...props}: UsersProps) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize} totalUsersCount={totalUsersCount}
                       onPageChanged={onPageChanged}/>
            {users.map((u: UserType) => <User key={u.id}
                                              user={u}
                                              followingInProgress={props.followingInProgress}
                                              unfollow={props.unfollow}
                                              follow={props.follow}/>
            )}
        </div>
    )
}
export default Users;