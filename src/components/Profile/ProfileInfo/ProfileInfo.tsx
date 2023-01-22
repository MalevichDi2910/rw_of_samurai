import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const ProfileInfo = (props: { profile: ProfileType, status: string, updateStatus: (status: string) => void }) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img alt=''*/}
            {/*         src='https://videohive.img.customer.envatousercontent.com/files/39148eff-2e44-4c04-9afe-87fad174f39c/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=fc17d88ff8cdd25ba70835c6e5a93e41'></img>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;