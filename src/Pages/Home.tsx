import React from 'react';
import Navbar from '../component/NavBar/navbar';
import Hero from '../component/Hero/hero';
import Projects from '../Sections/Projects/Projects';
import Technologies from '../Sections/Technologies/technologies';
import About from '../Sections/About/about';

const Home = () => {
  return <div>
            <Navbar />
            <Hero />
            <Projects />
            <Technologies />
            <About />
        </div>;
};

export default Home;
