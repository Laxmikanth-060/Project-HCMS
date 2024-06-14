import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function ViewComplaints() {

    const {hostel,category}=useParams();
    console.log(hostel,category);
    const state = useRef();
    const [accept,setAccept]=useState("Accept");
    const [resolve,setResolve]=useState("Resolve");
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState("login");
  
    const filterHandler = (e) => {
        e.preventDefault();
        const Status = state.current.value;
        axios.post("http://localhost:3001/warden/filter", { Status,hostel,category })
          .then(response => {
            setData(response.data);
          })
          .catch(err => console.log(err));
          toggleTemp();
      }

    const statusHandler = (e, id) => {
        e.preventDefault();
    
        axios.post("http://localhost:3001/warden/status", { id,hostel,category })
          .then(response => {
            setResolve("Resolved");
            toggleTemp();
            // Update the data based on the response if needed
            // setData(prevData => prevData.map(complaint => complaint._id === id ? { ...complaint, status: "Resolved" } : complaint));
          })
          .catch(err => console.log(err));
    
       
      }
  
    useEffect(() => {
      axios.post("http://localhost:3001/warden/complaints",{hostel,category})
        .then(res => {
          const Data = res.data;
          console.log(res);
          setData(Data);
        })
        .catch(err => console.log(err));
    }, [temp]);
  
    useEffect(() => {
        setCount(data.length);
      }, [data]);
    
      const toggleTemp = () => {
        setTemp(prevTemp => prevTemp === "login" ? "logout" : "login");
      };
    

  return (
    
    <div>
    <h2 className='text-center text-2xl font-bold mt-7'>{category} Complaints</h2>
    <h1 className='text-center text-xl font-bold mt-1'>Filter count - {count}</h1>

    <div className='flex justify-center'>
      <table className='mx-5 my-7 border border-black'>
        <thead className='border border-black'>
          <tr>
            <th className='border border-black px-4 py-3 text-lg font-bold text-stone-600'>UserID</th>
            {/* <th className='border border-black px-4 py-3 text-lg font-bold text-stone-600'>Hostel</th> */}
            <th className='border border-black px-4 py-3 text-lg font-bold text-stone-600'>Wing</th>
            <th className='border border-black px-3 py-3 text-lg font-bold text-stone-600'>Room</th>
            <th className='border border-black px-13 py-3 text-lg font-bold text-stone-600'>Info</th>
            <th className='border border-black px-12 py-3 text-lg font-bold text-stone-600'>Raised Time</th>
            <th className='border border-black px-12 py-3 text-lg font-bold text-stone-600'>Resolved Time</th>
            <th className='border border-black px-7 py-3 text-lg font-bold text-stone-600'>
              Status
              <form onSubmit={filterHandler} className='flex'>
                <select className='px-2 py-1 rounded-sm' ref={state}>
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Resolved">Resolved</option>
                </select>
                <button className='bg-cyan-500 p-1 hover:bg-cyan-600'>search</button>
              </form>
            </th>
            <th className='border border-black px-4 py-2 text-lg font-bold text-stone-600'>Accept Status</th>
            <th className='border border-black px-4 py-2 text-lg font-bold text-stone-600'>Update Status</th>
          </tr>
        </thead>

        <tbody className='p-7'>
          {data.map((complaint, index) => (
            <tr key={index}>
              <td className='border border-black-200 px-3 py-2 text-md text-center'>{complaint.userId}</td>
              {/* <td className='border border-black-200 px-3 py-2 text-md text-center'>{complaint.hostel}</td> */}
              <td className='border border-black-200 px-3 py-2 text-md text-center'>{complaint.wing}</td>
              <td className='border border-black-200 px-3 py-2 text-md text-center'>{complaint.room}</td>
              <td className='border border-black-200 px-3 py-2 text-md text-center'>{complaint.info}</td>
              <td className='border border-black-200 px-2 py-2 text-md text-center'>{complaint.atime}</td>
              <td className='border border-black-200 px-2 py-2 text-md text-center'>{complaint.btime}</td>
              <td className='border border-black-200 px-3 py-2 text-md text-center'>
                {complaint.status === "Pending" ? (
                  <span className='text-red-600 font-bold text-lg'>{complaint.status}</span>
                ) : (
                  <span className='text-green-500 font-bold text-lg'>{complaint.status}</span>
                )}
              </td>
              <td className='border border-black-200 text-md'>
                <form onSubmit={(e) => statusHandler(e, complaint._id)}>
                  <button className='border border-black-200 px-5 py-4 text-md w-full bg-blue-500 hover:bg-blue-600 hover:scale-105'>
                    {accept}
                  </button>
                </form>
              </td>
              <td className='border border-black-200 text-md'>
                <form onSubmit={(e) => statusHandler(e, complaint._id)}>
                  <button className='border border-black-200 px-5 py-4 text-md w-full bg-green-300 hover:bg-green-500 hover:scale-105'>
                    {resolve}
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  )


}

export default ViewComplaints