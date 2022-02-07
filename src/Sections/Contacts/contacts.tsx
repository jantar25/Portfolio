import React from 'react';
import { FaUserAlt,FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdMail} from 'react-icons/io';



const contacts = () => {
  return <div className='flex flex-col px-5 sm:px-20 py-12' id='contact'>
            <div className='flex flex-col mb-8'>
                <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-4'/>
                <h1 className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-white font-Manrope
                text-4xl font-[700]'>Contact me</h1>
            </div>
            <div className='flex'>
                <div className='flex-1'>
                    <h2 className='font-[700] mb-8'>Get In Touch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nam deserunt, porro commodi voluptate perferendis necessitatibus 
                     </p>
                    <div>
                        <div className='flex items-center'>
                            <FaUserAlt style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Name</h3>
                                <span className='text-[0.8rem]'>Bulambo Gloire</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <FaMapMarkerAlt style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Address</h3>
                                <span className='text-[0.8rem] '>Kigali/RWANDA</span>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <IoMdMail style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Mail</h3>
                                <span className='text-[0.8rem]'>glodybulambo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h2 className='font-[700] mb-8'>Message me</h2>
                    <form className='flex flex-col my-4 mx-4 w-5/6'>
                        <div className='flex justify-between w-full mb-4'>
                            <input placeholder='Name' className='rounded px-4 py-2'/>
                            <input placeholder='Email' className='rounded px-4 py-2'/>
                        </div>
                        <input placeholder='Subject' className='rounded mb-4 px-4 py-2'/>
                        <input placeholder='Message' className='rounded mb-4 px-4 py-2'/>
                        <button className='items-start bg-red-600 rounded px-4 py-2 w-1/3'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>;
};

export default contacts;
