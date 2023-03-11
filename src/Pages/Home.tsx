import React from 'react';
import Hero from '../component/Hero/hero';
import Projects from '../Sections/Projects/Projects';
import Technologies from '../Sections/Technologies/technologies';
import About from '../Sections/About/about';
import Contacts from '../Sections/Contacts/contacts';


const Home = () => {
  return <div>
            <Hero />
            <About />
            <Projects />
            <Technologies />
            <Contacts />
        </div>;
};

export default Home;
