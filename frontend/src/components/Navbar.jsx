import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav w-[100%] h-[10%] bg-[#ee6d52] px-6 py-4 flex justify-between font-extrabold">
      <div className="title">
        <h2 className='text-3xl'>Smart Attend</h2>
      </div>
      <div className="navlinks h-full w-1/4 flex justify-end items-center">
        <ul className='flex justify-between gap-6 text-2xl'>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Project</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
