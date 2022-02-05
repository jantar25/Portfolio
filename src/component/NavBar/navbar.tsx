import React,{useState} from 'react';
import { Link } from 'react-scroll'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai'
const logo = require("../../images/logo.png")


const Menu = ()=>(
  <>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300 ">
    <Link className="cursor-pointer" to="Projects" smooth={true} duration={500}>Projects</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="WhatsBrain" smooth={true} duration={500}>Technologies</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="possibilities" smooth={true} duration={500}>About</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="features" smooth={true} duration={500}>Blog</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="blog" smooth={true} duration={500}>Library</Link></p>
  </>
)

const Navbar = () => {

  const [navbar,setNavbar]=useState(false);  
  const changeBackground=()=>{
    if(window.scrollY>=80){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)


  return <div className={`flex h-[80px] justify-between items-center ${navbar? 'bg-[#040311]' : 'bg-transparent'}
  z-20 px-5 sm:px-20 py-2 sticky top-0 `}>
          <div className="flex-1 flex justify-start items-center">
            <Link className="cursor-pointer" to="Home" smooth={true} duration={500}>
              <div className="flex items-center mr-8">
                <div className="mr-1 w-10">
                  <img className='min-w-full' src={logo} alt="test" />
                </div>
                <h1 className="hidden sm:flex text-3xl font-Manrope text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300">BMG</h1>
              </div>
            </Link>
            <div className="hidden lg:flex">
              <Menu />
            </div>
          </div>
          <div className="flex-1 hidden sm:flex justify-end items-center">
            <a className='mr-2 hover:translate-y-1 duration-200' href='http://Github.com'><AiFillGithub/></a>
            <a className='mr-2 hover:translate-y-1 duration-200' href='http://Github.com'><AiFillLinkedin/></a>
            <a className='mr-2 hover:translate-y-1 duration-200' href='http://Github.com'><AiFillInstagram/></a>
          </div>
        </div>;
};

export default Navbar;
