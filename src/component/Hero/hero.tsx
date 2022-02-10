import React from 'react';
import BackgroundAnimation from "../BgAnimation/BgAnimation" 
import { Link } from 'react-scroll'
const me = require("../../images/me.png")


const Hero = () => {

  return <div className='flex flex-col lg:h-screen lg:flex-row px-5 sm:px-20 pt-20 lg:pt-2' id='Home' >
          <div className='flex-1 flex justify-center items-start flex-col mb-24'>
              <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-Manrope
              text-xl'>Welcom!</h3>
              <div className='flex flex-row justify-center items-cnter w-full mt-2'>
                <p className='mr-2 sm:mr-4 flex-1/3 text-[14px] sm:text-2xl '>I am</p>
                <p className='flex-1 relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 font-Manrope
                text-[14px] sm:text-2xl font-black animation-typing overflow-hidden'>
                    BULAMBO MWENDELWA Gloire</p>
              </div>
              <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 font-Manrope text-2xl
               md:text-4xl font-black pt-4 animate-pulse'>Full-Stack Web Developper</h1>
              <p className='font-Manrope text-lg text-text my-6'>
                  With extensive experience for over 1 year,my expertize 
                  is to create and design websites and many more...</p>
                  <Link className="cursor-pointer" to="about" smooth={true} duration={500}>
                    <button className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-1 rounded font-Manrope 
                    font-bold text-white text-lg' type='button'>Learn more</button>
                  </Link>
          </div>
          <div className='flex-1 w-full h-full relative flex justify-center items-center hover-img'>
              <img className='z-10 w-full h-full md:max-w-lg lg:h-full object-contain' src={me} alt="ai" />
              <div className='w-full md:w-3/4 lg:w-full absolute top-0 right-auto left-auto'>
                <BackgroundAnimation/>
              </div>
          </div>
        </div>;
};

export default Hero;
