import React from "react";
import ProfileInfo, {ProfileType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: { profile: ProfileType }) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
