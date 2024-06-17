import React from 'react'
import { useRef,useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'

function Complaint() {
  
   const {acholder}=useParams();
   const [file,setFile]=useState();
   const email=useSelector((state)=>state.user.email);
   const navigate=useNavigate();
   const cat=useRef();
   const hostel=useRef();
   const room=useRef();
   const wing=useRef();
   const info=useRef();

  const submithandler=(e)=>{
    e.preventDefault();
    const Cat=cat.current.value;
    const Hostel=hostel.current.value;
    const Room=room.current.value;
    const Wing=wing.current.value;
    const Info=info.current.value;
    
    axios.post("http://localhost:3001/student/raisecomplaint",{Cat,Hostel,Room,Wing,Info,email})
    .then((data)=>{
      alert("Complaint submitted successfully!");
      navigate(`/student/${acholder}`);
    })
    .catch((err)=>err);
  }

  const fileHandle=(e)=>{
  
     console.log(file);
      const formdata=new FormData();
    formdata.append('file',file);
    console.log(formdata);
    axios.post("http://localhost:3001/upload",formdata)

    .then((data)=>{
      console.log(data);
    })

    .catch(err=>console.log(err));

    }
  

  return (

      <div className='m-5 mt-16 mx-[120px]'>


    <div className='w-[1070px] p-6 bg-slate-100 rounded-lg shadow-md'>
      <h1 className='text-center text-3xl font-semibold text-blue-700 my-4 mb-4'>Register Complaint</h1>
  <form className='flex flex-wrap' onSubmit={submithandler}> 

    
    <h1 className='font-bold text-slate-800 text-2xl ml-2 my-3'>Complaint Category: </h1>
   <select className='bg-transparent text-center mx-3 border border-slate-400 hover:border-black text-1xl font-semibold text-zinc-700 px-4 py-1 my-3 hover:cursor-pointer' ref={cat} required>
    <option  value="None">Choose complaint Category</option>
    <option value="Electrical">Electrical</option>
    <option value="Carpenter">Carpentor work</option>
    <option value="Cleaning">Cleaning</option>
    <option value="Others">Others</option>
   </select>
   


    <h1 className='font-bold text-slate-800 text-2xl ml-20 my-3'>Hostel Name: </h1>
   <select className='text-center mx-3 border border-slate-400 hover:border-black text-1xl font-semibold text-zinc-700 px-4 py-1 my-3 hover:cursor-pointer' ref={hostel} required>
    <option  value="none">Select Hostel Name</option>
    <option value="BH-1">BH-1</option>
    <option value="BH-2">BH-2</option>
    <option value="GH-1">GH-1</option>
    <option value="GH-2">GH-2</option>c
    <option value="OBH">Old Boys Hostel</option>
    <option value="OGH">Old Girls Hostel</option>
   </select><br/>

   <h1 className='font-bold text-slate-800 text-2xl ml-2 my-3'>Hostel Wing: </h1>
   <select className='text-center mx-3 border border-slate-400 hover:border-black text-1xl font-semibold text-zinc-700 px-4 h-[30px] my-3 hover:cursor-pointer' ref={wing} required>
    <option value="none">Select wing</option>
    <option value="East">East</option>
    <option value="West">West</option>
    <option value="South">South</option>
    <option value="North">North</option>
   </select>

   <h1 className='font-bold text-slate-800 text-2xl ml-[337px] my-3'>Room No: </h1>
   <input className='border border-slate-400 hover:border-black h-[30px] px-3 py-1 mx-3 w-[200px] my-3' ref={room} placeholder="Enter Room Number" />

   <h1 className='font-bold text-slate-800 text-2xl ml-3  my-3'>Add Info: </h1>
   <textarea className='border border-slate-400 hover:border-black h-[50px] px-3 py-1 mx-3 my-4' placeholder="add info..." ref={info} ></textarea>
   <div className='flex'>
   <h1 className='font-bold text-slate-800 text-2xl ml-[120px] my-3'>Upload Image:</h1>
   <input className='border border-slate-400 hover:border-black h-[35px] px-3 py-1 mx-[10px] w-[250px] my-3' type="file" onChange={e=>setFile(e.target.files[0])}/>
   <button type="button" onClick={fileHandle} className= ' h-[30px] bg-blue-600 py-1 px-2 rounded-lg  hover:scale-105 hover:cursor-pointer mt-4'>Upload</button>
   </div>

   <button type='submit' className='bg-green-500 hover:bg-green-700 w-[200px] my-4 mt-7 ml-[425px] px-3 py-2 rounded-lg text-lg text-semibold hover:scale-110'>Submit</button>
</form>
    </div>


    </div>
  )
}

export default Complaint