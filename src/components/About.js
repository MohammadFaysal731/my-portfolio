import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../images/my-image/me.jpg'
const About = () => {
    return (
        <section className='container pt-5'>
            <div className="text-center p-3">
                <h2
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(77, 181, 255, 1)' }}>About Me</h2>
                <h5
                    data-aos="fade-down"
                    data-aos-delay="1500"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Get To Know</h5>
            </div>
            <div className="row m-3" >
                <div
                    data-aos="fade-up"
                    data-aos-delay="2000"
                    data-aos-duration="2500"
                    data-aos-easing="ease-in-out"
                    className="col-sm-6 col-md-6">
                    <img src={Me} className="img-fluid rounded-circle p-5" alt="..." style={{ width: '500px', height: '500px' }} />
                </div>
                <div
                    data-aos="fade-down"
                    data-aos-delay="2800"
                    data-aos-duration="3000"
                    data-aos-easing="ease-in-out"
                    className="col-sm-6 col-md-6">
                    <blockquote
                    >
                        I am a student of Government Tolaram College. I am learning about web development and I am finishing my professional web development course. Now I am a web developer. I'm passionate about web development. I know about web development. My skills in web development I know  #HTML #CSS # JavaScript #ES6 #Bootstrap #React-Bootstrap #Tailwind and daisyui #React #React-Router #Firebase #NodeJS #Express #MongoDB.
                    </blockquote>
                    <Link
                        to="/contact" className='btn' style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(77, 181, 255, 1)' }}>Contact Me</Link>

                </div>
            </div>

        </section>
    );
};

export default About;

