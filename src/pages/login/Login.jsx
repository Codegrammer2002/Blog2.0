import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">
            Login
        </span>
    <form className='loginForm'>

        <label> Email</label>
        <input className = "loginInput" type = "text" placholder = "Enter your email.." />
        <label> Password</label>
        <input type="password" className='loginInput' placeholder='Enter your password...' />
        <button className='loginButton'>Login</button>   
    </form>    
    <button className='loginRegisterButton'>

    </button>
    </div>
  )
}
