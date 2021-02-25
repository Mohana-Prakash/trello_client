import React,{useState,useEffect} from 'react'
import io from "socket.io-client";
import { Link } from 'react-router-dom';
import './login.css'

let socket

const PORT = 'https://trello-be-mp.herokuapp.com/';

const Login = ({location,history}) => {
    
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")

    useEffect(() => {socket = io(PORT)});
   
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(socket)

        socket.emit("login",({name,password}))

        socket.on("boards",((dbUser)=>{
        console.log(dbUser,"dfghj");
        if(dbUser){
            console.log(password,'password from login');
                console.log(password, dbUser._id)
                history.push(`/dashboard/${dbUser._id}`)
        }
        else{
            alert("Entered Credentials Invalid")
        }
    }))
    }
    
    return (
        <div className='login-bg'>
            <form className='login' onSubmit={submitHandler}>
                <h4>Log in to Trello</h4>
                <div className="login-email">
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} 
                    placeholder="Enter email"
                    />
                </div>
                <div className="login-password">
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    placeholder="Password"
                    />
                </div>
                <div>
                    <button className="login-btn" type="submit">Log in</button>
                </div>
                <h5>OR</h5>
                <div>
                    <Link to='/signup'><button className="signup-btn" type="submit">SignUp</button></Link>
                </div>
            </form>
        </div>
    )
}

export default (Login)