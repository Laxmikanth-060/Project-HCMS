import React from 'react'
import { NavLink } from 'react-router-dom'
import {WardenIconNav, HomeIcon, ContactIcon, AboutIcon, RulesIcon, WorkersIcon, TendersIcon, RoomChangeIcon,Maps } from '../Icons'
// import Maps from '../Icons'
import { useState } from 'react'

function NavBar() {

  const [toggle,setToggle]=useState("open");

  const toggleHandler=()=>{
      
         toggle==="close" ? setToggle("open") : setToggle("close");
         console.log(toggle)
  }

  return (
    

     toggle==="open" ?
     <div>
      {/* <button className='fixed h-2 w-20 bg-slate-950' onClick={toggleHandler}></button>   */}

    <div className='flex justify-evenly bg-slate-100 rounded-sm text-center shadow-xl'>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" :  'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/home"><div className='flex justify-start'><span className='mt-1 mr-2'><HomeIcon/></span>Home</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/wardens"><div className='flex justify-start'><span className='mt-1 mr-2'><WardenIconNav/></span>Wardens</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/workers"><div className='flex justify-start'><span className='mt-1 mr-2'><WorkersIcon/></span>Workers</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/rules"><div className='flex justify-start'><span className='mt-1 mr-2'><RulesIcon/></span>Rules</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/roomchange"><div className='flex justify-start'><span className='mt-1 mr-1'><RoomChangeIcon/></span>AlterRoom</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/maps"><div className='flex justify-start'><span className='mr-1'><Maps/></span>Maps</div></NavLink> 
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to='/tenders'><div className='flex justify-start'><span className='mt-1 mr-2'><TendersIcon/></span>Tenders</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/about"><div className='flex justify-start'><span className='mt-1 mr-2'><AboutIcon/></span>About</div></NavLink>
        <NavLink className={ ({ isActive }) =>isActive
            ? "text-xl bg-blue-200 border border-white px-6 py-1 rounded-md" : 'text-xl hover:bg-slate-200 px-6 py-1 rounded-md'} to="/contact"><div className='flex justify-start'><span className='mt-1 mr-2'><ContactIcon/></span>ContactUs</div></NavLink>


    </div>
    </div>   : <button className='fixed h-2 w-20 bg-slate-950' onClick={toggleHandler}></button>  
   
 
  )
} 

export default NavBar