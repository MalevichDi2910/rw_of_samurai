import { addPostActionCreator, PostType } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {ProfileType} from "./../ProfileInfo/ProfileInfo";

type mapStateToPropsType = {
    posts: PostType[]
    profile: ProfileType
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    profile: state.profilePage.profile!
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => dispatch(addPostActionCreator(newPostText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
