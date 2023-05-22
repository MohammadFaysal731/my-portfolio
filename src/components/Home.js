import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import HomeProject from './HomeProject';
import HomeSkill from './HomeSkill';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <HomeSkill/>
            <Service/>
            <HomeProject/>
            <Contact/>
        </div>
    );
};

export default Home;