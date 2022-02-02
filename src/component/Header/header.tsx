import React from 'react';
import Navbar from '../NavBar/navbar';
import Hero from '../Hero/hero';



const header = () => {
  return <div className='relative bg-gradient-to-l from-[#040311] to-[#020024]'>
      <Navbar />
      <Hero />
  </div>;
};

export default header;
