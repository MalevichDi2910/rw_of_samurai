import React from "react";
import {FieldValues, useForm} from "react-hook-form";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div>
                <input
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                        }
                    })}
                    type="email"
                    placeholder="example@mail.com"
                />
            </div>
            {errors.email && <span role="alert">{errors.email.message?.toString()}</span>}
            <div>
                <input
                    {...register("password", {
                        required: "Required",
                        pattern: {
                            value:  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/,
                            message: "Password must contain mixed latin letters and numbers"
                        },
                        minLength: {
                            value: 8,
                            message: "min length is 8"
                        },
                        maxLength: {
                            value: 15,
                            message: "max length is 15"
                        }
                    })}
                    type="password"
                    placeholder="password"
                />
            </div>
            {errors.password && <span role="alert">{errors.password.message?.toString()}</span>}
            <div>
                <input {...register("rememberMe")} type='checkbox'/> remember me
            </div>
            <button type="submit">Log in</button>
            <div>
                {isSubmitSuccessful ? <span role="alert">Incorrect email or password</span> : ''}
            </div>
        </form>
    );
}

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {loginTC}) (Login);

