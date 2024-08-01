import React, { useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function WardenPage() {
  
    const { hostel }=useParams();  
    const [total,setTotal]=useState("0");
    const [resolved,setResolved]=useState("0");
    const [pending,setPending]=useState("0");
    const [electrical,setElectrical]=useState("0");
    const [carpenter,setCarpenter]=useState("0");
    const [cleaning,setCleaning]=useState("0");
    const [others,setOthers]=useState("0");

    useEffect(()=>{

      axios.post("http://localhost:3001/warden/dashboard",{hostel})
      .then((res)=>{
        let p=0,r=0,e=0,cr=0,cl=0,ot=0;
         for(let i=0;i<res.data.length;i++){
           if(res.data[i].status==="Pending")
              p++;
         }
         setPending(p);
         for(let i=0;i<res.data.length;i++){
          if(res.data[i].status==="Resolved")
             r++;
        }
        setResolved(r);
        setTotal(res.data.length);


        for(let i=0;i<res.data.length;i++){
          if(res.data[i].category==="Electrical")
             e++;
        }
             setElectrical(e);                       

         for(let i=0;i<res.data.length;i++){
              if(res.data[i].category==="Carpenter")
                 cr++;
            }
          
             setCarpenter(cr);


             for(let i=0;i<res.data.length;i++){
              if(res.data[i].category==="Cleaning")
                 cl++;
            }

           setCleaning(cl);


           for(let i=0;i<res.data.length;i++){
            if(res.data[i].category==="Others")
               ot++;
          }
            setOthers(ot);

      })
      .catch(err=>console.log(err));

    })

  return (
    <div className='mt-8'>
        <h1 className='text-pink-700 text-4xl flex-none text-center'>Complaints Categories</h1>

    <div className='flex justify-center mt-10'>
        
       <div><Link to={`/warden/${hostel}/Electrical`}> <div className=' h-450px bg-sky-400 hover:cursor-pointer hover:bg-sky-700 p-14 px-16 font-bold mx-6 rounded-lg hover:scale-105 shadow-sm text-xl text-slate-800 hover:text-black'>Electrical<span>({electrical})</span></div> </Link></div>
       <div><Link to={`/warden/${hostel}/Carpenter`}> <div className=' h-450px bg-sky-400 hover:cursor-pointer hover:bg-sky-700 p-14 px-16 font-bold mx-6 rounded-lg hover:scale-105 shadow-sm text-xl text-slate-800 hover:text-black'>Carpenter<span>({carpenter})</span></div> </Link></div>
       <div><Link to={`/warden/${hostel}/Cleaning`}> <div className=' h-450px bg-sky-400 hover:cursor-pointer hover:bg-sky-700 p-14 px-16 font-bold mx-6 rounded-lg hover:scale-105 shadow-sm text-xl text-slate-800 hover:text-black'>Cleaning<span>({cleaning})</span></div></Link></div>
       <div><Link to={`/warden/${hostel}/Others`}> <div className=' h-450px bg-sky-400 hover:cursor-pointer hover:bg-sky-700 p-14 px-16 font-bold mx-6 rounded-lg hover:scale-105 shadow-sm text-xl text-slate-800 hover:text-black'>Others<span>({others})</span> </div></Link></div>
    </div>
          
          <h1 className='font-bold text-xl text-purple-700 text-center mt-12'>Complaints Statistics</h1>

  <div className='flex justify-around'>

    <div className='flex justify-center mt-3 '>
        <div className='bg-blue-600 rounded-full h-[150px] w-[150px] m-4 mx-10 relative'><div className='absolute text-lg text-slate-950 font-semibold mt-12 ml-[50px]'><h1>Total</h1><h1 className='text-center'>{total}</h1></div></div>
        <div className='bg-green-500 rounded-full h-[150px] w-[150px] m-4 mx-10'><div className='absolute mt-12 ml-[35px] text-slate-950 font-semibold text-lg'><h1>Resolved</h1><h1 className='text-center'>{resolved}</h1></div></div>
        <div className='bg-red-500 rounded-full h-[150px] w-[150px] m-4 mx-10'><div className='absolute mt-12 ml-[38px] text-slate-950 font-semibold text-lg'><h1>Pending</h1><h1 className='text-center'>{pending}</h1></div></div>
    </div>


  </div>

    </div>
  )
}

export default WardenPage