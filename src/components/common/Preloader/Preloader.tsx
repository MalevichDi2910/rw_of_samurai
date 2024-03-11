import React from 'react';
import s from "./Preloader.module.css"

const Preloader = () => {
    return (
        <div>
            <span className={s.loader}></span>
        </div>
    );
};

export default Preloader;