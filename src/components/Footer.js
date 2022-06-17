import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='container pt-5'>
            <div className="d-flex justify-content-center m-3">
                <a href="https://linkedin.com" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsLinkedin></BsLinkedin></a>
                <a href="https://github.com/MohammadFaysal731" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsGithub></BsGithub></a>
                <a href="https://www.facebook.com" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsFacebook></BsFacebook></a>
                <a href="https://twitter.com/home" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
            <div className="text-center p-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}> Mohammad Faysal</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)' }} className="m-3">&copy; Copyright {year} &copy;</p>
                <p style={{ color: 'rgba(77, 181, 255, 1)' }}>All Rights Reserved. Prowered by the Mohammad Faysal</p>
            </div>
        </footer>
    );
};

export default Footer;