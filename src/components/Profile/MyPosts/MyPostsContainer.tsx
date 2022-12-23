import React from "react";
import {
    InitialStateType,
    addPostActionCreator,
    updateNewPostTextActionCreator,
    PostType
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
