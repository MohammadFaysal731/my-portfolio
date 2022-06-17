import React from 'react';
import { Link } from 'react-router-dom';
import ME from '../images/my-image/me.png'
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
const Banner = () => {
    return (
        <section className='p-5'>
            <div className="text-center pt-3" style={{ color: 'rgba(77, 181, 255, 1)' }}>
                <h5 >Hello I'm</h5>
                <h2>Mohammad Faysal</h2>
                <h5 className='mb-3'>Front-end-developer</h5>
                <Link to='/contact' className='btn rounded me-2' style={{ backgroundColor: '#0A0826', color: 'white', border: '1px solid rgba(77, 181, 255, 1)' }}>Contact Me</Link>
                <a href='https://drive.google.com/file/d/1oMrNYXOR1dGSrVBHNwEP7_3BzrfAH1GC/view?usp=sharing' download target='_blank' className='btn  rounded' style={{ backgroundColor: '#0A0826', color: 'white', border: '1px solid rgba(77, 181, 255, 1)' }}>Download Resume</a>

            </div>
            <div className="d-flex justify-content-center mt-3 ">
                <img src={ME} alt="" className=' rounded-circle' style={{ width: '500px', height: '500px', border: '1px solid rgba(77, 181, 255, 1)' }} />
            </div>
            <div className="d-flex justify-content-center m-3">
                <a href="https://linkedin.com" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsLinkedin></BsLinkedin></a>
                <a href="https://github.com/MohammadFaysal731" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsGithub></BsGithub></a>
                <a href="https://www.facebook.com" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><BsFacebook></BsFacebook></a>
                <a href="https://twitter.com/home" target="_blank" className='m-2' style={{ color: 'rgba(77, 181, 255, 1)' }}><AiFillTwitterCircle></AiFillTwitterCircle></a>
            </div>
        </section >
    );
};

export default Banner;