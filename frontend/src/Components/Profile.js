import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Profile() {
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [email,setEmail]=useState("");
  const name = user.username;
  const {acholder}=useParams();
  
  useEffect(() => {
    axios.post("https://project-hcms-hkrx.onrender.com/view/profile", { acholder })
      .then(data => {
         setUsername(data.data[0].username);
         setEmail(data.data[0].email);
      })
      .catch(err => console.log(err));
  }, [name,acholder]);

  return (
    <div className='mx-[540px] mt-16 justify-center items-center'>
      <div className=''>
        <img src='/user.jpeg' alt='profile'/>
      </div>
      <div className='ml-5 mt-3'>
       <h1 className='text-xl my-4'>Username : {username}</h1>
       <h1 className='text-xl my-4'>Email : {email}</h1>
      </div>
    </div>
  )
}

export default Profile
