import React from 'react';
import Navbar from '../component/NavBar/navbar';
import Hero from '../component/Hero/hero';
import Projects from '../Sections/Projects/Projects';
import Technologies from '../Sections/Technologies/technologies';

const Home = () => {
  return <div>
            <Navbar />
            <Hero />
            <Projects />
            <Technologies />
        </div>;
};

export default Home;
