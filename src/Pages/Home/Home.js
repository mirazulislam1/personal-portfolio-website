import React from 'react';
import About from '../../About/About';
import Contact from '../Contact/Contact';
import MySelf from '../MySelf/MySelf';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <MySelf></MySelf>
            <Projects></Projects>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;