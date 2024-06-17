import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

function Contact() {
  return (
    <div>
      <div className='bg-yellow-100 p-12 mx-72 w-[800px] mt-28 shadow-lg text-center rounded-md'>
        <h1 className='font-bold text-2xl text-center text-red-600 mb-3'>For any queries...!?</h1>
        <h1>Please do visit <button onClick={() => { /* handle click */ }} className='text-lg text-blue-500 underline bg-transparent border-none p-0 cursor-pointer'>@Help-desk</button> of Hostel Complaint Management System.</h1>
        <div className='flex justify-evenly mt-8'>
          <div>
            <h3 className='text-lg font-mono'>Contact No: 9492303856,9492301902</h3>
            <h3>Email: chiefwarden@rgukt.ac.in | adsw@rgukt.ac.in </h3>
            <IconButton aria-label="location">
        <LocationOnIcon />
      </IconButton><span>RGUKT-Basar,Telangana-504107.</span>
            </div>

          <div className='mt-2'>
            <h3 className='text-md font-semibold text-slate-800'>Follow us On</h3>
            <IconButton aria-label="instagram" href="https://www.instagram.com">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="twitter" href="https://www.twitter.com">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="telegram" href="https://www.telegram.org">
        <TelegramIcon />
      </IconButton>
      <IconButton aria-label="linkedin" href="https://www.linkedin.com">
        <LinkedInIcon />
      </IconButton>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
