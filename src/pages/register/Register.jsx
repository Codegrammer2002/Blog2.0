import React from 'react'
import "./register.css"
export default function register() {
  return (
    <div className='register'>
        <span className="registerTitle">
            register
        </span>
    <form className='registerForm'>
        <label> First Name</label>
        <input type="text" className="registerInput" required placeholder='your first name...' />
        <label>Last Name</label>
        <input type="text" className="registerInput" required placeholder='your last name...' />

        <label> Email</label>
        <input className = "registerInput" type = "text" placeholder = "enter your email.." required />
        <label> Password</label>
        <input type="password" className='registerInput' placeholder='enter your password...' required />
        <label> Confirm Password</label>
        <input type="password" className="registerInput" placeholder='re-enter your password' required />

        <button className='registerButton'>register</button>   
    </form>    
    <button className='registerLoginButton'>
      Login 
    </button>
    </div>
  )
}
