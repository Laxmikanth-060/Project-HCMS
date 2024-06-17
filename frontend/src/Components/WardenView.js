import React from 'react'
import { Link } from 'react-router-dom'

function WardenView() {
  return (
    <div>
      <h1 className='text-center text-3xl font-semibold mt-12 text-yellow-600'>Complaints of Respective Hostels</h1>
      <div className='flex flex-wrap justify-evenly my-4 mb-5'>
      <div><Link to='/warden/BH-1'><div className='w-[500px] h-[150px] bg-green-400 m-7 rounded-xl flex items-center justify-center hover:bg-green-500 hover:scale-105'><div><h1 className='text-xl font-semibold text-cyan-950'>Boys Hostel-1</h1></div></div></Link></div>
      <div><Link to='/warden/BH-2'> <div className='w-[500px] h-[150px] bg-green-400 m-7 rounded-xl flex items-center justify-center hover:bg-green-500 hover:scale-105'><h1 className='text-xl font-semibold text-cyan-950'>Boys Hostel-2</h1></div></Link></div>
      <div> <Link to='/warden/GH-1'> <div className='w-[500px] h-[150px] bg-green-400 m-7 rounded-xl flex items-center justify-center hover:bg-green-500 hover:scale-105'><h1 className='text-xl font-semibold text-cyan-950'>Girls Hostel-1</h1></div></Link></div>
      <div>  <Link to='/warden/GH-2'> <div className='w-[500px] h-[150px] bg-green-400 m-7 rounded-xl flex items-center justify-center hover:bg-green-500 hover:scale-105'><h1 className='text-xl font-semibold text-cyan-950'>Girls Hostel-2</h1></div></Link></div>
      <div> <Link to='/warden/OBH'> <div className='w-[500px] h-[150px] bg-green-400 m-7 rounded-xl flex items-center justify-center hover:bg-green-500 hover:scale-105'><h1 className='text-xl font-semibold text-cyan-950'>Old Boys Hostel (OBH)</h1></div></Link></div>
      <div>  <Link to='/warden/OGH'> <div className='w-[500px] h-[150px] bg-green-400 m-7 rounded-xl flex items-center justify-center hover:bg-green-500 hover:scale-105'><h1 className='text-xl font-semibold text-cyan-950'>Old Girls Hostel (OGH)</h1></div></Link></div>
    </div>
    </div>

  )
}
export default WardenView