import React from 'react';
import { useSelector } from 'react-redux';
import StudentView from './StudentView';
import MovingLine from './MovingLine';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "../Components/Footer"

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-cyan-100 p-2 rounded-full w-8 h-10 shadow-lg hover:bg-red-600 z-10 cursor-pointer`}
      onClick={onClick}
    >
      &#8250;
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 left-0 bg-cyan-100 p-2 rounded-full w-8 h-10 shadow-lg hover:bg-red-600 z-10 cursor-pointer`}
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
   <div className='bg-cover pb-14 ' style={{ backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/02/80/21/23/1000_F_280212305_KgZdCn9Z7W84ytEvcZV0iN6ciM73ccqm.jpg')" }}>
     
      {user.username ? (
        <StudentView />
      ) : (
        <div className='m-auto'>

          <div className="pt-3">
          <MovingLine />
          </div>
          
          <Slider {...settings} className='w-[1000px] mx-auto'>
            <div className='flex justify-center'>
              <img src="/hostel.jpeg" alt="Slide 1" className='w-[800px] h-[330px] ml-[100px] mt-[65px]' />
            </div>
            <div className='flex justify-center'>
              <img src="/hostel1.jpeg" alt="Slide 2" className='w-[800px] h-[330px] ml-[100px] mt-[65px]' />
            </div>
            <div className='flex justify-center'>
              <img src="/hostel2.jpeg" alt="Slide 3" className='w-[800px] h-[330px] ml-[100px] mt-[65px]' />
            </div>
            <div className='flex justify-center'>
              <img src="/hostel3.jpeg" alt="Slide 4" className='w-[800px] h-[330px] ml-[100px] mt-[65px]' />
            </div>
          </Slider>
        </div>
      )}

    <Footer/>
    </div>
   
  );
}

export default Body;
