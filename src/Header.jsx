import React from 'react'
import { useRef } from 'react'
import './Header.css'
import autorobvideo from './assets/autorob.mp4'




const Header = () => {
  return (
    <div className='flex flex-wrap items-center gap-[1rem] justify-center'>
      <div className="left mt-2 font-sans font-semibold ">
        <h1 className='pl-12'>Welcome To AUTOROB</h1>
        <h2 className='text-white'>Justifying 'T' in HBTU</h2>
        </div>
      <div className="right  mt-1 border-red-50 justify-center items-center ">
       <div className='video flex justify-center items-center'> <video className=' object-cover p-[4px] h-[500px] w-[1200px] pt' src= {autorobvideo} autoPlay loop muted></video> </div>
      </div>
    </div>
  )
}

export default Header
