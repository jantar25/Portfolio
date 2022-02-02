import React from 'react';
import BackgroundAnimation from "../BgAnimation/BgAnimation" 
const me = require("../../images/me.png")


const hero = () => {
  return <div className='flex flex-col lg:h-screen lg:flex-row px-5 pt-2 sm:px-20' id='Home'>
          <div className='flex-1 flex justify-center items-start flex-col mb-24'>
              <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-Manrope
              text-xl'>Welcom!</h3>
              <div className='flex flex-row justify-center items-cnter w-full mt-2'>
                <p className='mr-4 flex-1/3 text-2xl '>I am</p>
                <p className='flex-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-Manrope
                text-2xl font-black'>
                    BULAMBO MWENDELWA Gloire</p>
              </div>
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-Manrope
               text-4xl font-black pt-4'>Full-Stack Web Developper</h1>
              <p className='font-Manrope text-md md:text-lg text-text my-6'>
                  I am a web developper with extensive experience for over 1 year. My expertize 
                  is to create and design websites and many more...</p>
                  <button className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-1 rounded font-Manrope 
                  font-bold text-white text-md md:text-lg' type='button'>Learn more</button>
                <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-20'/>
          </div>
          <div className='flex-1 relative flex justify-center items-center'>
              <img className='z-10 w-full h-full object-contain' src={me} alt="ai" />
              <div className='w-full absolute top-0 right-0'>
                <BackgroundAnimation/>
              </div>
          </div>
        </div>;
};

export default hero;
