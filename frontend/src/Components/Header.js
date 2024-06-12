import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
// import appStore from '../appStore'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import { removeUser } from '../userSlice'
import {useNavigate} from 'react-router-dom'

function Header() {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [temp,setTemp]=useState("close");
  const user=useSelector((state)=>state.user);

  const set=()=>{
    temp==="close"?setTemp("open"):setTemp("close");
  }
  
  const removehandler=()=>{
 
      dispatch(removeUser({}));
      navigate("/");
      
  }

  const profileHandler=()=>{
      navigate("/view/profile")
  }


  return (
    <div className='flex  flex-wrap border border-black-200 justify-between  shadow-md h-[69px] bg-slate-300 rounded-sm'> 
      <div>
      {/* <img className='w-[65px] h-[65px] py-2 px-2 rounded-full' src='/rguktlogo.jpeg' alt='logo'/> */}
      </div>
         {/* <h1 className='text-indigo-400 font-bold text-4xl mt-7 ml-5 shadow-sm'>Hostel Complaint Management System</h1> */}
      <div className=' justify-around mb-8 font-bold  '>
         {
          user.username ? <div className='h-[45px] w-[45px] mt-4 mr-20  hover:cursor-pointer ' >

              <div onClick={set}><img src='/user.jpeg' className='rounded-full ml-16' alt='logo'/></div>
            {
                temp==="open" && <div className='flex flex-col ml-4 mt-3'> <button className='text-center border border-black hover:bg-slate-500 absolute p-[2px]' onClick={profileHandler}>Profile</button> <button className='text-center border border-black ml-14 mr-11 hover:bg-slate-500 absolute p-[2px] ' onClick={removehandler}>logout</button> </div> 
                
            }
            
            
            
            </div> 
             : 
             
             <Link className='text-lg hover:scale-125 absolute -ml-20 mt-6' to="/login">Login</Link>
        }
        
        {/* <button>login</button> */}
      </div>
      </div>
  )
}

export default Header