import React from 'react'
import { Link } from 'react-router-dom'

function WardenView() {
  return (
    <div className='flex flex-wrap justify-evenly'>
       <div><Link to='/warden/BH-1'><div className='w-[500px] h-[200px] bg-green-400 m-7'>Boys Hostel-1</div></Link></div>
       <div><Link to='/warden/BH-2'> <div className='w-[500px] h-[200px] bg-green-400 m-7'>Boys Hostel-2</div></Link></div>
      <div> <Link to='/warden/GH-1'> <div className='w-[500px] h-[200px] bg-green-400 m-7'>Girls Hostel-1</div></Link></div>
      <div>  <Link to='/warden/GH-2'> <div className='w-[500px] h-[200px] bg-green-400 m-7'>Girls Hostel-2</div></Link></div>
      <div> <Link to='/warden/OBH'> <div className='w-[500px] h-[200px] bg-green-400 m-7'>Old Boys Hostel (OBH)</div></Link></div>
      <div>  <Link to='/warden/OGH'> <div className='w-[500px] h-[200px] bg-green-400 m-7'>old Girls Hostel (OGH)</div></Link></div>
    </div>
  )
}
export default WardenView