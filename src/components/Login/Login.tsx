import { useState } from "react";
import { useForm } from "react-hook-form";

 const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
     console.log(data)

    return (
        <form onSubmit={handleSubmit((data: any) => setData(JSON.stringify(data)))}>
            <h1>Login</h1>
            <div>
            <input {...register("email")} type='email' placeholder="email" />
            </div>
            <div>
            <input {...register("password")} type='password' placeholder="password" />
            </div>
            <div>
            <input {...register("remember me")} type='checkbox'/> remember me
            </div>
            <button type="submit">Log in</button>
        </form>
    );
}

export default Login;