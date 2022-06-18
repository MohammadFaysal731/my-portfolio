import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='container' style={{ height: '30vh' }}>
            <div
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="d-flex justify-content-center m-3">
                <a href="https://linkedin.com" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsLinkedin></BsLinkedin></a>
                <a href="https://github.com/MohammadFaysal731" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsGithub></BsGithub></a>
                <a href="https://www.facebook.com" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsFacebook></BsFacebook></a>
                <a href="https://twitter.com/home" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
            <div className="text-center pb-5">
                <h2
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(77, 181, 255, 1)' }}> Mohammad Faysal</h2>
                <p
                    data-aos="fade-down"
                    data-aos-delay="1500"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }} className="m-3">&copy; Copyright {year} &copy;</p>
                <p
                    data-aos="fade-down"
                    data-aos-delay="2500"
                    data-aos-duration="2500"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(77, 181, 255, 1)' }}>All Rights Reserved Powered By The Mohammad Faysal</p>
            </div>
        </footer>
    );
};

export default Footer;