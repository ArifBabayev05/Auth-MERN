import React, { useState } from 'react'
import Forgot from '../../components/Forgot/Forgot'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import './AuthLayout.css'
const AuthLayout = () => {
    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const [forgot, setForgot] = useState(false);
  
    const handleLogin = () => {
      setLogin(true);
      setRegister(false);
      setForgot(false);
    };
    const handleRegister = () => {
      setLogin(false);
      setRegister(true);
      setForgot(false);
    };
    const handleForgot = () => {
      setLogin(false);
      setRegister(false);
      setForgot(true);
    };
  
  return (
    <div className='AuthLayout'>
        <div className='auth-logo'>
            <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png' alt='SomeImage'/>
        </div>
       {/* form */}
      {login && <Login />}
      {register && <Register />}
      {forgot && <Forgot />}
      {/* actions */}
        
        
        <div className="actions">
            <p className="actions-l"
            onClick ={login ? handleRegister : handleLogin}
            >{login ? "Register?" : "Login" }</p>
            <p className="actions-r" 
            onClick = {handleForgot}>Forgot Password?</p>
        </div>
    </div>
  )
}

export default AuthLayout