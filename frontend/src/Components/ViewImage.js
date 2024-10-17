import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ViewImage() {

    const {image}=useParams();
    const [temp,settemp]=useState(null);

    useEffect(()=>{
        axios.post("https://project-hcms-3.onrender.com/warden/complaints/image",{image})
        .then(res=>{
              settemp(res.data[0].image);
        })
        .catch(err=>console.log(err));
    })

  return (
    <div>
        {
          temp?
          <div className="flex items-center justify-center w-screen h-screen">
            <div className="h-[400px]">
              <img src={temp} alt='complaint_img'/>
            </div>
            </div> 
            : 
            <div>Loading...</div>
       }
    </div>
  )
}

export default ViewImage