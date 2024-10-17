import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addUser } from '../userSlice';

function WardenLogin() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mail = useRef();
  const pass = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    const email = mail.current.value;
    const password = pass.current.value;

    axios.post("https://project-hcms-3.onrender.com/login/warden", { email, password })
      .then((data) => {
        if (data.data === "password") {
          setMsg("Login successful!");
          dispatch(addUser({ email }));
          navigate("/warden/view");
        }
        else if (data.data === "nopassword") {
          setMsg("Wrong password!");
        }
        else if (data.data === "nouser") {
          setMsg("No user found. Please register!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='flex justify-center mt-20'>
      <div className='w-80 bg-white border border-gray-200 shadow-lg rounded-xl p-6'>
        <h1 className='font-bold text-2xl text-center mb-5'>Login</h1>
        <form onSubmit={submithandler} className='space-y-4'>
          <div className='my-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email ID</label>
            <input
              id='email'
              className='block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
              type='email'
              placeholder='Email ID'
              ref={mail}
              required
            />
          </div>
          <div className='my-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              id='password'
              className='block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500'
              type='password'
              placeholder='Password'
              ref={pass}
              required
            />
          </div>
          <p className='text-red-500'>{msg}</p>
          <button className='block w-full bg-indigo-500 text-white py-2 rounded-xl font-bold hover:bg-indigo-700 transition duration-300 mt-2'>
            Login
          </button>
        </form>
        <div className='mt-4'>
          <h3 to='/forgot-password' className='text-blue-500 hover:underline ml-28 my-2'>Forgot password?</h3>
          <div className='flex items-center  space-x-5'>
            <p className='text-gray-600'>Don't have an Account?</p>
            <Link to='/login/warden/register' className='text-teal-600 font-bold hover:underline hover:scale-105'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WardenLogin;
