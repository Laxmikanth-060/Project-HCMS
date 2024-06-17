import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link ,useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../userSlice'

function StudentView() {
  const {acholder}=useParams();
  // console.log(username);
  const [total, setTotal] = useState("0");
  const [resolved, setResolved] = useState("0");
  const [pending, setPending] = useState("0");
  const [temp, setTemp] = useState("");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const name = user.username;

  useEffect(() => {
    axios.post("https://project-hcms-hkrx.onrender.com/student/view", {acholder})
      .then((res) => {
        let p = 0, r = 0;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status === "Pending")
            p++;
        }
        setPending(p);
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].status === "Resolved")
            r++;
        }
        setResolved(r);
        setTotal(res.data.length);
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    axios.post("http://localhost:3001/view/profile", { name })
      .then(data => {
        const mail = data.data[0].email;
        console.log(mail);
        dispatch(addUser({
          username: name,
          email: mail,
        }));
      })
      .catch(err => console.log(err));
  }, [dispatch, name, temp]);

  return (
    <div className='flex-wrap justify-center items-center py-12'>
      <h1 className='font-bold text-2xl text-purple-700 text-center mt-8 mb-11'>{acholder}'s Complaints Statistics</h1>

      <div className='flex justify-center mt-3 '>
        <div className='bg-blue-600 rounded-full h-[150px] w-[150px] m-4 mx-10 relative'>
          <div className='absolute text-lg text-slate-950 font-semibold mt-12 ml-[50px]'>
            <h1>Total</h1>
            <h1 className='text-center'>{total}</h1>
          </div>
        </div>
        <div className='bg-green-500 rounded-full h-[150px] w-[150px] m-4 mx-10'>
          <div className='absolute mt-12 ml-[35px] text-slate-950 font-semibold text-lg'>
            <h1>Resolved</h1>
            <h1 className='text-center'>{resolved}</h1>
          </div>
        </div>
        <div className='bg-red-500 rounded-full h-[150px] w-[150px] m-4 mx-10'>
          <div className='absolute mt-12 ml-[38px] text-slate-950 font-semibold text-lg'>
            <h1>Pending</h1>
            <h1 className='text-center'>{pending}</h1>
          </div>
        </div>
      </div>

      <div className='flex mt-7 justify-around'>
        <Link to={`/student/${acholder}/raisecomplaint`}>
          <div className='bg-violet-500 text-2xl border border-black-100 w-80 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-violet-700 ml-28 rounded-md' onClick={e => setTemp("ok")}>
            <h1 className='mt-3'>Register Complaint</h1>
          </div>
        </Link>
        <Link to={`/student/${acholder}/viewcomplaint`}>
          <div className='bg-violet-500 text-2xl border border-black-100 w-80 h-14 hover:cursor-pointer text-center my-7 shadow-sm hover:scale-105 hover:bg-violet-700 mr-28 rounded-md' onClick={e => setTemp("ok")}>
            <h1 className='mt-3'>View Status</h1>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StudentView
