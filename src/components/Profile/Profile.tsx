import React, {useState} from "react";
import ProfileInfo, {ProfileData, ProfileType} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css'
import ProfileDataForm from "../Profile/ProfileInfo/ProfileDataForm";

type ProfileProps = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<'pending' | 'fulfilled' | 'rejected'>
}

const Profile = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }: ProfileProps) => {
    const[editMode, setEditMode] = useState(false);

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            })
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>
            <ProfileInfo profile={profile} isOwner={isOwner} status={status}
                         updateStatus={updateStatus} savePhoto={savePhoto} saveProfile={saveProfile}/>
            <div className={s.mainBlock}>
                {editMode ?
                    <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>:
                    <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode} />
                }
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;
