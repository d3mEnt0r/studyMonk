import React from "react";
import { useState } from "react";

import "./login.css";


const signupInitialValues = {
    name:"",
    email: "",
    mobile:"",
    password:""
}

const loginInitialValues = {
    email: "",
    password:""
}


const Login = ({isUserAuthenticated}) => {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);


    
    function onInputChange(event) {
        setSignup({ ...signup, [event.target.name]: event.target.value });
        console.log(event.target.value);
    }

    function onValueChange(event){
        setLogin({...login, [event.target.name]: event.target.value});
    }
    
    function toggleSignup(){
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    const signupUser = async() => {
        alert("Success!");
    }


    return (
            <div className="loginContainer">
                <h1>Study<span>Monk</span></h1>
                {
                    account==='login' ?
                    <>
                        <input type="text" onChange={(event) => onValueChange(event)} name="email" value={login.email} placeholder="Email" required />
                        <input type="password" onChange={(event) => onValueChange(event)} name="password" value={login.password} placeholder="Password" required />
                        <button className="signup-btn" type="submit">Log In</button>
                        <h3 className="or">OR</h3>
                        <button className="toggle-btn" type="button" onClick={()=>toggleSignup()}>Create an account!</button>
                    </>
                    :
                    <>
                        <input type="text" onChange={(event) => onInputChange(event)} name="name"  placeholder="Name" autoComplete="off" required />
                        <input type="email" onChange={(event) => onInputChange(event)} name="email"  placeholder="Email" autoComplete="off" required />
                        <input type="text" onChange={(event) => onInputChange(event)} name="mobile"  placeholder="Mobile" autoComplete="off" required />
                        <input type="password" onChange={(event) => onInputChange(event)} name="password"  placeholder="Password" autoComplete="off" required />
                        <button className="signup-btn" type="submit" onClick={signupUser}>Sign Up</button>
                        <h3 className="or">OR</h3>
                        <button className="toggle-btn" type="button" onClick={()=>toggleSignup()}>Already have an account!</button>
                    </>
                }
            </div>
    )
}

export default Login;