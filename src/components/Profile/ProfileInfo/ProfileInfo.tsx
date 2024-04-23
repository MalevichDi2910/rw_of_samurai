import React, { ChangeEvent } from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/user.png";
import edit from "./../../../assets/images/edit.png";

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number | undefined
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string
}

export type ProfileInfoProps = {
    profile: ProfileType
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<'pending' | 'fulfilled' | 'rejected'>
}

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }: ProfileInfoProps) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div className={s.coverImage}>
                    <div className={s.headerCoverImage}></div>
                </div>
                <label htmlFor="mainPhotoInput">
                    <img alt={'userPhoto'} src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                </label>
                <div>
                    {isOwner && <input className={s.inputFile} id={'mainPhotoInput'} type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <div className={s.fullName}>
                    {profile.fullName}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
        </div>
    )
}

export const ProfileData = (props: {profile: ProfileType | null, isOwner: boolean, goToEditMode: () => void}) => {
    const {profile, isOwner, goToEditMode} = props

    if (!profile) {
        return <Preloader/>
    }

    return <div className={s.wrapper}>
        {isOwner &&
            <button className={s.iconEdit} onClick={goToEditMode}><img alt={'edit'} src={edit} className={s.image}></img>
            </button>
        }
        <div className={s.descriptionData}>
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                {Object.entries(profile.contacts).map(contact => {
                    let key = contact[0];
                    let value = contact[1];
                    return <Contact key={key} contactTitle={key} contactValue={value}/>
                })}
            </div>
        </div>
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue: string
}
export const Contact = (props: ContactType) => {
    return <>
        {
            props.contactValue && <div><b>{props.contactTitle}</b>:{props.contactValue}</div>
        }
    </>
}

export default ProfileInfo;

