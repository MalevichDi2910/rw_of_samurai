import React from "react";
import {FieldValues, useForm} from "react-hook-form";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from './Login.module.css'

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = (props: LoginPropsType) => {

    const{loginTC, isAuth} = props;
    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm();

    const onSubmit = (data: FieldValues) => {
        loginTC(data.email, data.password, data.rememberMe)
        reset();
    }

    if(isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={s.form}>
            <legend>Log In</legend>
            <div className={s.item}>
                <label>Email:</label>
                <input
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                    className={s.inputField}
                />
                {errors.email && <span className={s.error} role="alert">{errors.email.message?.toString()}</span>}
            </div>
            <div className={s.item}>
                <label>Password:</label>
                <input
                    {...register("password", {
                        required: "Required",
                        minLength: {
                            value: 4,
                            message: "min length is 4"
                        },
                        maxLength: {
                            value: 15,
                            message: "max length is 15"
                        }
                    })}
                    type="password"
                    className={s.inputField}
                />
                {errors.password && <span className={s.error} role="alert">{errors.password.message?.toString()}</span>}
            </div>
                <div className={s.rememberMe}>
                    <input {...register("rememberMe")} type='checkbox'/> <label>Keep me signed in</label>
                </div>
                <div className={s.logIn}>
                    <button type="submit">Log In</button>
                    {isSubmitSuccessful ?
                        <span className={s.errorLogin} role="alert">Incorrect email or password</span> : ''}
                </div>
            </fieldset>
        </form>
            <div className={s.info}>
                <p>To log in get registered <a href="https://social-network.samuraijs.com/" target={'_blank'}>here</a></p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
                <p className={s.text}>If you currently can not sign in to Google Chrome, use a different</p>
                <p>browser. Third-party browser cookies do not work for everyone.</p>
                <p>Google is gradually disabling them</p>

            </div>
        </div>
    );
}

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {loginTC}) (Login);

