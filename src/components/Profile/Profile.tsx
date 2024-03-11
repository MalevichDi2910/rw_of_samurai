import React from "react";
import ProfileInfo, {ProfileType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileProps = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} isOwner={props.isOwner} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
