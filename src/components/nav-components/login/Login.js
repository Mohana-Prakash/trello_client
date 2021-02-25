import React from 'react'
import Logo from '../login/logo.svg'
import './login.css'

function Login() {
    return (
        <React.Fragment>
            <img className='trello-logo' src={Logo}/>
            <div className='login'>
                <h1>Login</h1>
                <div className='login-email'>
                    <h3>Email</h3>
                    <input placeholder='Enter Email ID'/>
                </div>
                <div className='login-pass'>
                    <h3>Password</h3>
                    <input placeholder='Enter Password'/>
                </div>
                <button className='login-btn' type='submit'>Submit</button>
            </div>
        </React.Fragment>
    )
}

export default Login
