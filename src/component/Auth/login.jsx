// import { useState } from "react";
import Logo from "../shared/logo";
import './login.css'
// import Register from "./register";
// import { data, replace } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import useAuthHooks from "../../Hooks/AuthHook";
export default function Login() {
    
    const {isLoading, handleChange, handleSubmit, isRegister, loginDate} = useAuthHooks()
  
        
        
    return (
        <div className="login-page">

           <div className="mewam">
             
                
                <div className="login-brand">
                    <div className="logo">
                            <Logo />
                    </div>
                    <span className="login-brand-details">
                        CineScope
                    </span>
                
            </div>

            <div className="login-header">
                    <h1 className="login-title">
                        Welcome back
                    </h1>
                    <p className="login-subtitle">
                        Sign in to continue your cinematic journey.
                    </p>
            </div>

            <form action="login" onSubmit={handleSubmit} >
                
                <div login-field>
                    <label  className="labels" htmlFor="email">
                        userName
                    </label>
                    <br />

                    <input 
                    className="email-input"
                    type="text"
                     name="username"
                     value={loginDate.username} 
                      onChange={handleChange} 
                     placeholder="Enter user name emilys"
                     required />
                     
                </div>

                <div className="login-field">
                     <span className="password-span">
                        <label className="labels"  htmlFor="password">
                        Password
                        </label> 
                        <a  className="forget-pass"  href="#forget password">
                            Forget password?
                        </a>
                        </span> 

                        <input 
                        className="password-input"
                        type="password" name="password"
                        value={loginDate.password}
                        onChange={handleChange}
                        placeholder="Enter your password : emilyspass"  /> 
                </div>

                <div className="signIn-div">
                     <button className="signIn-btn" type="submit">
                        {isLoading ? "Sign In" : "SignIn in progress"}
                     {isRegister}
                        </button>   
                </div>
                
            </form>

            <div className="login-footer">
                 <span className="dont-have-acct">Don't have an account?</span>  
                 <a
                 className="signUp-login-link"
                 href="#signUp">
                    Sign Up
                    </a> 
            </div>
           </div>
        </div>
    )
}