import React from 'react';
import About from './About';
import Banner from './Banner';
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
        </div>
    );
};

export default Home;