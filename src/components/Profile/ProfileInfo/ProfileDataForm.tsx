import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from 'redux-form';
import {ProfileType} from "../../Profile/ProfileInfo/ProfileInfo";
import s from './ProfileInfo.module.css'

type ProfileDataFormType = {
    profile: ProfileType
    onSubmit: (formData: ProfileType) => void
}
const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = ({
                                                                                                                  handleSubmit,
                                                                                                                  profile,
                                                                                                                  error
                                                                                                              }) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.profileDataWrapper}>
            <div className={s.profileBtn}>
                <button className={s.saveBtn}>save</button>
            </div>
            {error && <div className={s.error}>{error}</div>}
            <div className={s.item}>
                <span>Full name:</span> {createField('', 'fullName', [], Input, {type: 'text'})}
            </div>
            <div className={s.item}>
                <span>Looking for a job:</span> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div className={s.item}>
                <span>My professional skills:</span>
                {createField('', 'lookingForAJobDescription', [], Input, {type: 'text'})}
            </div>
            <div className={s.item}>
                <span>About me:</span>
                {createField('', 'aboutMe', [], Textarea)}
            </div>
            {Object.entries(profile.contacts).map(contact => {
                let key = contact[0];
                let value = contact[1];
                return <div key={key} className={s.item}>
                    <span>{key}: </span>{createField('', 'contacts.' + key.toLocaleLowerCase(), [], Input, {type: 'text'})}{value}
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile', enableReinitialize: true,
    destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormReduxForm

