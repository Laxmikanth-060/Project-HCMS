import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

function StudComplaintView() {
  const [data, setData] = useState([]);
  const [electrical, setElectrical] = useState("0");
  const [carpenter, setCarpenter] = useState("0");
  const [cleaning, setCleaning] = useState("0");
  const [others, setOthers] = useState("0");
  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    axios.post("https://project-hcms-3.onrender.com/student/complaintView", { email })
      .then((res) => {
        const Data = res.data;
        setData(Data);

        let e = 0, cr = 0, cl = 0, ot = 0;

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].category === "Electrical")
            e++;
        }
        setElectrical(e);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].category === "Carpenter")
            cr++;
        }
        setCarpenter(cr);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].category === "Cleaning")
            cl++;
        }
        setCleaning(cl);

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].category === "Others")
            ot++;
        }
        setOthers(ot);
      })
      .catch((err) => console.log(err));
  }, [email]);

  return (
    <div className='mt-5'>
      <h1 className='font-bold text-xl text-teal-700 text-center mt-12'>Category Statistics</h1>

      <div className='flex justify-center mt-3 mx-[50px]'>
        <div className='bg-teal-500 rounded-full h-[150px] w-[150px] m-4 mx-10'>
          <div className='absolute text-lg text-slate-950 font-semibold mt-12 ml-[34px]'>
            <h1>Electrical</h1>
            <h1 className='text-center'>{electrical}</h1>
          </div>
        </div>
        <div className='bg-amber-200 rounded-full h-[150px] w-[150px] m-4 mx-10'>
          <div className='absolute mt-12 ml-[33px] text-slate-950 font-semibold text-lg'>
            <h1>Carpenter</h1>
            <h1 className='text-center'>{carpenter}</h1>
          </div>
        </div>
        <div className='bg-stone-400 rounded-full h-[150px] w-[150px] m-4 mx-10'>
          <div className='absolute mt-12 ml-[36px] text-slate-950 font-semibold text-lg'>
            <h1>Cleaning</h1>
            <h1 className='text-center'>{cleaning}</h1>
          </div>
        </div>
        <div className='bg-violet-400 rounded-full h-[150px] w-[150px] m-4 mx-10'>
          <div className='absolute mt-12 ml-[45px] text-slate-950 font-semibold text-lg'>
            <h1>Others</h1>
            <h1 className='text-center'>{others}</h1>
          </div>
        </div>
      </div>

      <h2 className='text-center text-2xl text-blue-800 font-bold mt-6'>Total Complaints</h2>
      <div className='flex justify-center mb-10'>
        <table className='mt-7 border border-black mb-10'>
          <thead className='border border-black'>
            <tr>
              <th className='border border-black px-6 py-4 text-lg font-bold text-stone-600 shadow-md'>Category</th>
              <th className='border border-black px-6 py-4 text-lg font-bold text-stone-600 shadow-md'>Hostel</th>
              <th className='border border-black px-6 py-4 text-lg font-bold text-stone-600 shadow-md'>Wing</th>
              <th className='border border-black px-4 py-4 text-lg font-bold text-stone-600 shadow-md'>Room</th>
              <th className='border border-black px-10 py-4 text-lg font-bold text-stone-600 shadow-md'>Info</th>
              <th className='border border-black px-14 py-4 text-lg font-bold text-stone-600 shadow-md'>Raised Time</th>
              <th className='border border-black px-14 py-4 text-lg font-bold text-stone-600 shadow-md'>Resolved Time</th>
              <th className='border border-black px-9 py-4 text-lg font-bold text-stone-600 shadow-md'>Status</th>
            </tr>
          </thead>
          
          <tbody>
            {data.map((complaint, index) => (
              <tr key={index}>
                <td className='border border-black-200 py-4 text-center text-md shadow-md'>{complaint.category}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>{complaint.hostel}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>{complaint.wing}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>{complaint.room}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>{complaint.info}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>{complaint.atime}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>{complaint.btime}</td>
                <td className='border border-black-200 text-center py-4 text-md shadow-md'>
                {complaint.status === "Pending" ? (
            <span className='text-red-600 font-bold text-lg'>{complaint.status}</span>
          ) : complaint.status === "Accepted" ? (
            <span className='text-blue-500 font-bold text-lg'>{complaint.status}</span>
          ) : (
            <span className='text-green-500 font-bold text-lg'>{complaint.status}</span>
          )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudComplaintView
