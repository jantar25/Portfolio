import React from 'react';
import Navbar from '../component/NavBar/navbar';
import Hero from '../component/Hero/hero';
import Projects from '../Sections/Projects/Projects';

const Home = () => {
  return <div>
            <Navbar />
            <Hero />
            <Projects />
        </div>;
};

export default Home;
