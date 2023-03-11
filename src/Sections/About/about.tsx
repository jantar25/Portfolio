import React from 'react';

const about = () => {
  return <div className='flex flex-col px-5 sm:px-20 py-16' id='about'>
            <div className='flex flex-col mb-8'>
                <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-4'/>
                <h1 className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-white font-Manrope
                text-4xl font-[700]'>About me</h1>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex-1'>
                    <p>Committed computer Science graduate with extensive experience for over 2 Years
                     in frontend development and additional server side skills. Self-motivated and 
                     enthusiastic team player dedicated to efficiently resolving project issues with 
                     attention to details and passionate about developing user-friendly interfaces 
                     while gaining skilled..
                    </p>
                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>;
};

export default about;
