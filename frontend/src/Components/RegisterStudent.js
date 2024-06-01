import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addUser } from '../userSlice'

function RegisterStudent() {
   
  const navigate=useNavigate();
  const dispatch=useDispatch();
   const [msg,setMsg]=useState("");
   const [mail,setMail]=useState();
   const username=useRef();
   const email=useRef();
   const password=useRef();
   const PhnNO=useRef();
   const ParentPhn=useRef();
   const FullName=useRef();

//    const sendEmail=()=>{
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "luckyanubothula2004@gmail.com", // Replace with your email
//         Password : "9DA874F67D42ED7437E35256322B1438B8FD", // Replace with your email password
//         To : document.querySelector("#mail").value,
//         // document.querySelector("#mail").value,
//         From : "luckyanubothula2004@gmail.com", // Replace with your email
//         Subject :  "Hello Mr/Ms."+ document.querySelector("#u").value +" ,Your registration at HCMS (Hostel Complaint Management System) has been successful..! Please make use of this facility to raise any type of complaints regarding hostel amenities.." ,
//         Body : "Your password starting with " + document.querySelector("#pass").value.slice(0,4)+"***** --With regards..@teamHCMS.",
//     }).then(
//         message => {
//             // alert("Email sent successfully to username");
          
//         },
//         error => alert("Error sending email: " + error)
//     );
// }


   const submithandler=(e)=>{

       e.preventDefault(); 
  
       const Username=username.current.value;
       const Email=email.current.value;
       const Password=password.current.value;
       const phone=PhnNO.current.value;
       const parentphn=ParentPhn.current.value;
       const fullname=FullName.current.value;

       if (!Email.match(/^b1[0-9]{5}@rgukt\.ac\.in$/)) {
        setMail("Invalid Email");
       // setMsg("Please enter a valid email.");
        return; // Exit the function without submitting the form
    }

    else{
           setMail("Valid Email");
           //sendEmail();
    }


       axios.post("http://localhost:3001/login/student/register",{Username,Email,Password,phone,parentphn,fullname})
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


          navigate("/student/view")
           
       }).catch(err=>err);
   }

//    const checkEmail=(email)=>{
//     if (!email.current.value.match(/^b1[0-9]{5}@rgukt\.ac\.in$/)) {
//         setMail("Invalid Email");
//         return;
//     } else {
//         setMail("Valid Email");
//     }
// }
 

  return (
    <div className='flex justify-center mt-24'>
    <div className='w-6/12 h-[380px] border border-black-100 shadow-lg rounded-xl'>
      <form onSubmit={submithandler}>
      <div className='pl-12 mt-3'>
      <h1 className='font-bold text-xl my-5'>Register</h1>
      <input className='border border-black-100 my-3 p-2' placeholder='Full Name' ref={FullName} required/>
      <input className='border border-black-100 my-3 p-2 ml-14' placeholder='Contact no.' ref={PhnNO} required/>
      <input className='border border-black-100 my-3 p-2' placeholder='Parent phn no.' ref={ParentPhn} required/>
      <input className='border border-black-100 my-3 p-2 ml-14' placeholder='Email : b19****@rgukt.ac.in' ref={email}  required/>
       {
         mail=="Valid Email" ? <p className='mb-1 ml-[277px] text-green-500'>{mail}</p> : <p className='mb-1 ml-[277px] text-red-500'>{mail}</p>
       }
       <input className='border border-black-100 my-3 p-2' placeholder='Username' ref={username} required/>
       
       <input className='border border-black-100 my-3 p-2 ml-14' placeholder='Password' ref={password} required/>
 
       <button className='bg-emerald-300 px-14 py-2 rounded-md ml-[180px] mt-5 font-bold hover:scale-110 hover:bg-emerald-400 '>register</button></div>
      
       </form>
    </div>
  </div>
  )
}

export default RegisterStudent
