import React from 'react';
import { useSelector } from 'react-redux';
import StudentView from './StudentView';
import MovingLine from './MovingLine';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Components/Footer"

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute top-1/3 transform -translate-y-1/2 right-0 bg-cyan-100 p-2 rounded-full w-8 h-10 shadow-lg hover:bg-red-600 z-10 cursor-pointer`}
      onClick={onClick}
    >
      &#8250;
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`absolute top-1/3 transform -translate-y-1/2 left-0 bg-cyan-100 p-2 rounded-full w-8 h-10 shadow-lg hover:bg-red-600 z-10 cursor-pointer`}
      onClick={onClick}
    >
      &#8249;
    </div>
  );
}

function Body() {
  const user = useSelector((state) => state.user);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    // className='bg-cover' style={{ backgroundImage: "url('/wall.jpeg')" }}
   <div>
     
      {user.email ? (
        <StudentView />
      ) : (
        <div className='relative m-auto'>

          <div className="absolute top-8 left-0 w-full z-10">
          <MovingLine />
          <div className=' my-12'>
          <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-red-600 via-yellow-600 via-green-500 to-blue-500 text-center'>Hostel Complaint Management System</h1>
          {/* <h3 className='"Effortless Complaint Resolution at Your Fingertips"'>Welcomes you</h3> */}
          <h3 className='text-center font-bold text-2xl text-teal-800 my-2'>"Effortless Complaint Resolution at Your Fingertips"</h3>
          </div>
          </div>
          
          <Slider {...settings} className=''>
            <div className='flex justify-center'>
              <img src="/wall.jpeg" alt="Slide 1" className='w-screen h-screen' />
            </div>
            <div className='flex justify-center'>
              <img src="/hostel1.jpeg" alt="Slide 2" className='w-screen h-screen' />
            </div>
            <div className='flex justify-center'>
              <img src="/hostel2.jpeg" alt="Slide 3" className='w-screen h-screen ' />
            </div>
            <div className='flex justify-center'>
              <img src="/hostel3.jpeg" alt="Slide 4" className='w-screen h-screen ' />
            </div>
          </Slider>
        </div>
      )}

    <Footer/>
    </div>
   
  );
}

export default Body;
