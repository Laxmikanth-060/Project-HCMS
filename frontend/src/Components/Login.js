import React from 'react'
import { Link } from 'react-router-dom'
import { StudentIcon, WardenIcon } from '../Icons';

function Login() {
  return (
 
       <div className='flex items-center justify-center mt-24'>

      <Link to="/login/student"><div className='w-[250px] h-[300px] bg-sky-100 hover:bg-sky-200 text-center text-2xl  rounded-lg flex items-center justify-center mx-[160px]'>
        <div className=''><StudentIcon/><h1 className='text-center font-semibold text-slate-800 mt-7 '>Student</h1></div>
        </div></Link>

      <Link to="/login/warden"><div className='w-[250px] h-[300px] text-center text-2xl rounded-lg flex justify-center items-center bg-sky-100 mx-[160px] hover:bg-sky-200 '>
        <div><WardenIcon/><h1 className='text-center font-semibold text-slate-800 mt-3 '>Warden</h1></div>
        </div></Link>

      </div>

 
  )
}

export default Login