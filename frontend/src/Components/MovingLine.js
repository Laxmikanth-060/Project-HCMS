// MovingLine.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovingLine = () => {
  return (
    
     <Link to="/login"> <div className=" h-full w-[500px] ml-12 bg-orange-400 animate-move rounded-lg"><h1 className='text-lg text-center py-1 text-purple-700'>Login to Register Complaint</h1></div></Link>
    
  );
};

export default MovingLine;
