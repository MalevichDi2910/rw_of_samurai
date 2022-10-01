import React from 'react';
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt=''
                     src='https://videohive.img.customer.envatousercontent.com/files/39148eff-2e44-4c04-9afe-87fad174f39c/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=fc17d88ff8cdd25ba70835c6e5a93e41'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;