import React, { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import {useDispatch} from 'react-redux'
import { addUser } from '../userSlice'

function WardenLogin() {
  const [msg,setMsg]=useState("");

  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useRef();
  const pass=useRef();
 

  const submithandler=(e)=>{
    e.preventDefault();
    const username=user.current.value;
    const password=pass.current.value;

    axios.post("http://localhost:3001/login/warden",{username,password})
    .then((data)=>{
      if(data.data==="password"){
        setMsg("login succesful!");
         dispatch(addUser({
          username:username,
         }))
        navigate("/warden/view")
      }
      else if(data.data==="nopassword"){
        setMsg("wrong password!");
        
      }
      else if(data.data==="nouser"){
        setMsg("no user found. Do Register !");
      }
    })
    .catch((err)=>console.log(err));
  }


  return (
     
    <div className='flex justify-center my-[100px]'>
    <div className='w-3/12 h-[370px] border border-black-100 shadow-lg rounded-xl'>
      <form onSubmit={submithandler}>
      <div className='pl-10 mt-3'>
      <h1 className='font-bold text-xl my-5'>Login</h1>
       <input className='border border-black-100 my-3 p-2' placeholder='Username' ref={user} required/>
       <input className='border border-black-100 my-3 p-2 ' placeholder='Password' ref={pass} type='password' required/><br/>
      <p className='text-red-500 my-1'>{msg}</p> 
       
       <button className='bg-indigo-600 w-[220px] h-8 ml-2 rounded-md  font-bold hover:scale-110 my-2'>login</button></div>
       <h1 className='my-1 text-end mr-14 text-blue-500 hover:cursor-pointer'>forget password ?</h1>
       
       </form>
       <div className='flex flex-wrap justify-around mx-7 my-3'>
       <h1 className=''>Don't have an Account?</h1><Link to="/login/warden/register"><h1 className='text-teal-600 font-bold hover:scale-110'>Register</h1></Link>
       </div>
    </div>
  </div>
  )
}

export default WardenLogin