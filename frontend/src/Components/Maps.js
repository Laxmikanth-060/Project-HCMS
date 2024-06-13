import React from 'react'

function Maps() {
  return (
    <div className='flex justify-center shadow-lg mt-6'>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5937.885414048073!2d77.91618354562921!3d18.8835553979484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce0bd5af69832f%3A0x141356acf1890fe9!2sBoys%20Hostel-1(BH-I)!5e1!3m2!1sen!2sin!4v1715488145666!5m2!1sen!2sin"
          width="1250"
          height="600"
          title="Google Maps - Boys Hostel-1 (BH-I)"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Maps
