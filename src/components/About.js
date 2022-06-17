import React from 'react';
import { FaRegFolderOpen, FaAward, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Me from '../images/my-image/me.jpg'
const About = () => {
    return (
        <section className='pt-5' >
            <div className="text-center pt-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}>About Me</h2>
                <h5 style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Get To Know</h5>
            </div>

            <div class="row m-3" >
                <div class="col-sm-6 col-md-6">
                    <img src={Me} class="img-fluid rounded-circle p-5" alt="..." style={{ width: '500px', height: '500px' }} />
                </div>
                <div class="col-sm-6 col-md-6">
                    <blockquote
                    >
                        I am a student of Government Tolaram College. I am learning about web development and I am finishing my professional web development course. Now I am a web developer. I'm passionate about web development. I know about web development. My skills in web development I know  #HTML #CSS # JavaScript #ES6 #Bootstrap #React-Bootstrap #Tailwind and daisyui #React #React-Router #Firebase #NodeJS #Express #MongoDB.
                    </blockquote>
                    <Link
                        to="/contact" className='btn btn-outline-success'>Contact Me</Link>

                </div>
            </div>

        </section>
    );
};

export default About;

