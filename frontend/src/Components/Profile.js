import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

function Profile() {

  const user=useSelector((state)=>state.user);
  const [data,setData]=useState("");
  const name=user.username;

  useEffect(()=>{

   axios.post("http://localhost:3001/view/profile",{name})
   .then(data=>{
    const mail=data.data[0].email;
       console.log(mail)
      setData(mail);

   })
   .catch(err=>console.log(err));

  },[])

  return (
    <div className='ml-96 mt-16 justify-center items-center'>
      <div className=''>
        <img src='/user.jpeg'/>
      </div>
      <div className='ml-5 mt-3'>
       <h1>Username : {user.username}</h1>
       <h1>Email : {data}</h1>
      </div>
    </div>
  )
}

export default Profile