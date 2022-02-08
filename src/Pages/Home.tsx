import React from 'react';
import Navbar from '../component/NavBar/navbar';
import Hero from '../component/Hero/hero';
import Projects from '../Sections/Projects/Projects';
import Technologies from '../Sections/Technologies/technologies';
import About from '../Sections/About/about';
import Contacts from '../Sections/Contacts/contacts';
import Footer from '../Sections/Footer/footer';

const Home = () => {
  return <div>
            <Navbar />
            <Hero />
            <Projects />
            <Technologies />
            <About />
            <Contacts />
            <Footer />
        </div>;
};

export default Home;
