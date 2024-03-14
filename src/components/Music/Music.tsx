import React from 'react';
import workInProgressAnim from '../../assets/images/workInProgressAnim.json'
import Lottie from "lottie-react";
import {useWindowSize} from "../common/hooks/useWindowSize";
import s from './Music.module.css'

const Music = () => {
    const { windowSize} = useWindowSize()

    const styles = windowSize < 600 ? {width : 250, height: 250} : {width: 500, height: 500}


    return (
        <div className={s.musicWrapper}>
            <Lottie animationData={workInProgressAnim} style={styles} loop={true}/>
        </div>
    );
};

export default Music