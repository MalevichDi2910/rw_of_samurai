import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'


type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {

    const[editMode, setEditMode] = useState(false);
    const[status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div style={{marginBottom: "20px"}}>
            { !editMode &&
                <div>
                   <b style={{color: "#4f515b"}}>status</b>: <span onDoubleClick={ activateEditMode }>{props.status || 'Hello! Welcome to my project'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input className={s.status} value={status} onChange={onStatusChange} onBlur={ deactivateEditMode } placeholder={'status...'} autoFocus />
                </div>
            }
        </div>
    )

}
