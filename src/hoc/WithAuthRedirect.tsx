import React from "react";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(WrappedComponent: React.ComponentType<T>) {

    function RedirectComponent (props: MapStateToPropsType) {
            let {isAuth, ...restProps} = props

            if (!isAuth) return <Navigate to={'/login'}/>

            return <WrappedComponent {...restProps as T as any}/>
        }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
}