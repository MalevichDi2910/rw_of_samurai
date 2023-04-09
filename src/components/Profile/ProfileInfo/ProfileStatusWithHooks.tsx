import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusProps = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusProps) => {

    const[editMode, setEditMode] = useState(false);
    const[status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
        props.updateStatus(status)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{props.status || '-------'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={ deactivateEditMode } autoFocus={true}/>
                </div>
            }
        </div>
    )

}
