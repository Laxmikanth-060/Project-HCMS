import React from 'react'
import { Link } from 'react-router-dom'

function Wardens() {
  return (
    <div className=' ml-10 flex flex-wrap justify-around items-center  mt-20'>
      <div className='flex'>
        <Link to="/wardens/bh1"><div className='text-2xl border border-slate-300 w-96 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-gray-400 mx-[100px]'><h1 className='mt-3'>Boys Hostel-1</h1></div></Link>
        <Link to="/wardens/bh2"><div className='text-2xl border border-slate-300 w-96 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-gray-400 mx-[100px]'><h1 className='mt-3'>Girls Hostel-1</h1></div></Link>
      </div>
      <div className='flex'>
        <Link to="/wardens/gh1"><div className='text-2xl border border-slate-300 w-96 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-gray-400 mx-[100px]'><h1 className='mt-3'>Boys Hostel-2</h1></div></Link>
        <Link to="/wardens/gh2"><div className='text-2xl border border-slate-300 w-96 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-gray-400 mx-[100px]'><h1 className='mt-3'>Girls Hostel-2</h1></div></Link>
      </div>
      <div className='flex'>
        <Link to="/wardens/gh1"><div className='text-2xl border border-slate-300 w-96 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-gray-400 mx-[100px]'><h1 className='mt-3'>Old Boys Hostel (OBH)</h1></div></Link>
        <Link to="/wardens/gh2"><div className='text-2xl border border-slate-300 w-96 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-gray-400 mx-[100px]'><h1 className='mt-3'>Old Girls Hostel (OGH)</h1></div></Link>
      </div>
    </div>
  )
}

export default Wardens