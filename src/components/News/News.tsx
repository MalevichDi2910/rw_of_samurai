import React from 'react';
import workInProgressAnim from '../../assets/images/workInProgressAnim.json'
import Lottie from "lottie-react";
import {useWindowSize} from "../common/hooks/useWindowSize";
import s from './News.module.css'

const News = () => {
    const { windowSize} = useWindowSize()

    const styles = windowSize < 600 ? {width : 250, height: 250} : {width: 500, height: 500}


    return (
        <div className={s.newsWrapper}>
            <Lottie animationData={workInProgressAnim} style={styles} loop={true}/>
        </div>
    );
};

export default News