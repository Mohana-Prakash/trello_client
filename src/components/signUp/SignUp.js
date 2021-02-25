import React,{useState,useEffect} from 'react'
import io from "socket.io-client";
import { Link } from 'react-router-dom';
import './signUp.css'

let socket

const PORT = 'https://trello-be-mp.herokuapp.com/';

function SignUp({history}) {
    const[socketID,setSocketID]=useState("")
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    
    useEffect(() => {
        socket = io(PORT);
      }, []);
      
    const submitHandler = (e)=>{
        e.preventDefault()

        console.log(socket)
        setSocketID(socket.id)
        console.log(socket.id)
        socket.emit("signup",({socketID:socketID,name,email,password}))
        socket.on('existingUser',()=>{
            history.push('/login')
        })
        socket.on('signed',(saveUser)=>{
            console.log(saveUser,"oooooo");
            history.push(`/dashboard/${saveUser._id}`)
        })
    }
    return (
        <div className='signup-bg'>
            <form className='signup' onSubmit={submitHandler}>
                <h4>Sign Up for your account</h4>
                <div className='signup-name'>
                    <input 
                    type="text" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className='signup-email'>
                    <input 
                    type="text" 
                    placeholder="Enter Email ID" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='signup-password'>
                    <input 
                    type="password" 
                    placeholder="Enter Password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className='login-btn'>SignUp</button>
                </div>
                <h5>OR</h5>
                <div>
                    <Link to='/login'><button className="signup-btn" type="submit">Login</button></Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp