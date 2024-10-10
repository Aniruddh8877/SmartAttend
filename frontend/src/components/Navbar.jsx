import React from 'react'

const Navbar = () => {
  return (
    <div className="nav w-[100%] h-20 bg-white px-6 py-4 flex justify-between">
        <div className="title">
            <h2 className=' text-3xl font-bold text-pink-400 '>Smart Attend</h2>
        </div>
        <div className="navlinks h-full w-1/4 flex justify-end items-center "> 
            <ul className='flex justify-between gap-6 text-1xl font-semibold'>
                <a href=""><li>home</li></a>
                <a href=""><li>contact</li></a>
                <a href=""><li>about</li></a>
                <a href=""><li>project</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar