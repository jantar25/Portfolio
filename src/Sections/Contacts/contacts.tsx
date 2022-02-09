import React,{ useRef } from 'react';
import { FaUserAlt,FaMapMarkerAlt,FaMobile } from 'react-icons/fa';
import { IoMdMail} from 'react-icons/io';
import emailjs from 'emailjs-com';



const Contacts = () => {
    const form = useRef<any>([]);
    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o27xpzc', 'template_rvwz16m', form.current, 'user_p6Z8erkcnfbXKsrc63eXs')
          .then((result:any) => {
              console.log(result.text);
          }, (error:any) => {
              console.log(error.text);
          });
          form.current.reset()
      };
    
  return <div className='flex flex-col px-5 sm:px-20 py-16' id='contact'>
            <div className='flex flex-col mb-8'>
                <div className='w-[70px] h-[5px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-4'/>
                <h1 className='mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-400 to-white font-Manrope
                text-4xl font-[700]'>Contact me</h1>
            </div>
            <p>Want to get in touch?<br />
                would love to hear fom you. Fill out the form or use the below details.
            </p>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex-1'>
                    <h2 className='font-[700] text-[1.3rem] mt-4'>Get In Touch</h2>
                    <div className='w-[30px] h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-2 mb-8'/>
                    <div className='mt-8'>
                        <div className='flex items-center mb-2'>
                            <FaUserAlt style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Name</h3>
                                <span className='text-[0.8rem]'>Bulambo Gloire</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <FaMapMarkerAlt style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Address</h3>
                                <span className='text-[0.8rem] '>Kigali/RWANDA</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <FaMobile style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Phone</h3>
                                <span className='text-[0.8rem] '>+250786120934/+250725868316</span>
                            </div>
                        </div>
                        <div className='flex items-center mb-2'>
                            <IoMdMail style={{fontSize:'1.5rem',marginRight:'15px'}}/>
                            <div>
                                <h3 className='text-[1rem] font-[600]'>Mail</h3>
                                <span className='text-[0.8rem]'>glodybulambo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h2 className='font-[700] text-[1.3rem] mt-4'>Message me</h2>
                    <div className='w-[30px] h-[3px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-lg mt-2 mb-8'/>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col my-4 lg:ml-4 max-w-5/6 text-black'>
                        <div className='flex justify-between mb-4'>
                            <input placeholder='Name' type='text' name='name' className='rounded w-1/2 px-4 py-2 mr-2'/>
                            <input placeholder='Email' type='email' name='email' className='rounded w-1/2 px-4 py-2'/>
                        </div>
                        <input placeholder='Subject' type='text' name='subject' className='rounded mb-4 px-4 py-2'/>
                        <textarea placeholder='Message' name='message' rows={4} className='rounded mb-4 px-4 py-2'/>
                        <button type='submit' className='flex justify-center items-center bg-red-600 rounded px-4 py-2 px-1 w-1/3 font-[500]'>
                            Send <p className='ml-1 hidden sm:flex'>Message</p></button>
                    </form>
                </div>
            </div>
        </div>;
};

export default Contacts;
