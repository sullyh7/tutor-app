import React from 'react'
// import Tution from "../../assets/index";
import img from"../../assets/tution.svg";

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row p-5 items-center mt-15sm:mt-20'>
      <div className='flex-1 text-5xl sm:text-6xl font-extrabold'>
        Boost your childs grades while keeping<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> Islam</span> in mind.
      </div>
      <div className='mt-20 sm:mt-0 flex-2 mr-5'>
        <img src={img} width={"500rem"} alt='Tution'/>
      </div>
    </div>
  )
}

export default Hero