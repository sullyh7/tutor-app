import React from 'react';
import teacher from "../../assets/teacher.svg";
import onlinelearning from "../../assets/online_learning.svg";

const WhyUs = () => {
  return (
    <div className=''>
        <div className='flex flex-col items-center sm:mt-[5rem] mt-[3rem] w-full'>
            <h1 className="text-5xl sm:text-6xl font-extrabold sm:mb-[10rem] mb-[5rem]">Why Us?</h1>
        </div>
        <div className='flex justify-between p-5' >
            <div className='flex-1'>
                <h1 className='text-5xl font-bold'>Hand Picked <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Muslim</span> teachers.</h1>
                <p className='leading-8 text-xl mt-5'>All our teachers are handpicked by our team, and all have qualifications in the field they teach in.<br/>Students are also allocated only teachers of their own gender preventing free mixing.</p>
            </div>
            
            <img className='hidden sm:block' src={teacher} width={"500rem"} alt="Teacher" />
        </div>

        <div className='flex justify-between p-5 sm:mt-[10rem] mt-[5rem]' >
            <img className='mr-20 hidden sm:block' src={onlinelearning} width={"500rem"} alt="Teacher " />
            <div className=''>
                <h1 className='text-5xl font-bold'>Classes accessible from <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>anywhere</span></h1>
                <p className='leading-8 text-xl mt-5'>Our classes are held online and so can be accessed from anywhere!<br/>Students join the classes via Teams meetings.</p>
            </div>
        </div>
    </div>
    
  )
}

export default WhyUs