import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Project from './Project';
import Service from './Service';
import Skill from './Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Service></Service>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;