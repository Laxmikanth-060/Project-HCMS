import React, { useState,useRef } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { addUser } from '../userSlice';
import {useDispatch} from 'react-redux'

function RegisterWarden() {

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [msg]=useState();
  const username=useRef();
   const email=useRef();
   const password=useRef();

  const submithandler =(e)=>{
      e.preventDefault();
      const Username=username.current.value;
      const Email=email.current.value;
      const Password=password.current.value;

      axios.post("https://project-hcms-3.onrender.com/login/warden/register",{Username,Email,Password})
      .then(data=>{
         //  if(data.data=="email"){
         //   setMsg("email already exits!");
         //    return;
         //   }
         // else if(data.data.Username==Username)

         dispatch(addUser({

          username:Username,
          email:Email,

        }));

         navigate("/warden/view")
          
      }).catch(err=>err);
  }

  return (
    <div className='flex justify-center mt-28'>
    <div className='w-3/12 h-[370px] border border-black-100 shadow-lg rounded-xl'>
      <form onSubmit={submithandler}>
      <div className='pl-10 mt-3'>
      <h1 className='font-bold text-xl my-5'>Register</h1>
       <input className='border border-black-100 my-3 p-2' placeholder='Username' ref={username} required/>
       <input className='border border-black-100 my-3 p-2' placeholder='Email' ref={email} required />
       <input className='border border-black-100 my-3 p-2' placeholder='Password' ref={password} required type='password' />
       <p className='mb-4 my-1 text-red-500'>{msg}</p>
       <button className='bg-emerald-300 hover:bg-emerald-400 w-24 h-8 rounded-md ml-16 font-bold hover:scale-110'>register</button></div>
      
       </form>
    </div>
  </div>
  )
}

export default RegisterWarden