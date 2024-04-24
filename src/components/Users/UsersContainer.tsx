import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {UserType, setCurrentPage, requestUsers, follow, unfollow} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersAPIComponentPropsType>{
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   portionSize={this.props.portionSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
            </>
    }}

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    portionSize: number
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state)
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers}))(UsersContainer)
