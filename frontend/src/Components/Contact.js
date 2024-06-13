import React from 'react';

function Contact() {
  return (
    <div>
      <div className='bg-yellow-100 p-12 mx-72 w-[800px] mt-28 shadow-lg text-center rounded-md'>
        <h1 className='font-bold text-2xl text-center text-red-600 mb-3'>For any queries...!?</h1>
        <h1>Please do visit <button onClick={() => { /* handle click */ }} className='text-lg text-blue-500 underline bg-transparent border-none p-0 cursor-pointer'>@Help-desk</button> of Hostel Complaint Management System.</h1>
      </div>
    </div>
  );
}

export default Contact;
