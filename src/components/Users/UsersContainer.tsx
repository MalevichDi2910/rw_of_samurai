import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {UserType, setCurrentPage, getUsers, follow, unfollow} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class UsersContainer extends React.Component<UsersAPIComponentPropsType>{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
            this.props.getUsers(pageNumber, this.props.pageSize);
            this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
            </>
            }
            }

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsers:(currentPage: number, pageSize: number) => void
    follow:(userId: number)=> void
    unfollow:(userId: number)=> void
}

export type UsersAPIComponentPropsType = MapStateToPropsType & MapDispatchToPropsType

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }

export default compose<ComponentType>(connect(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }))(UsersContainer)
