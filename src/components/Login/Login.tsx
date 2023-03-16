import React, {useState} from "react";
import {FieldValues, useForm} from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();
    const [data, setData] = useState("");

    const onSubmit = (data: FieldValues) => {
        setData(JSON.stringify(data));
        console.log(data);
        reset();
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
                        minLength: {
                            value: 8,
                            message: "min length is 8"
                        }
                    })}
                    type="password"
                    placeholder="password"
                />
            </div>
            {errors.password && <span role="alert">{errors.password.message?.toString()}</span>}
            <div>
                <input {...register("remember me")} type='checkbox'/> remember me
            </div>
            <button type="submit">Log in</button>
        </form>
    );
}

export default Login;

