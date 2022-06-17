import React from 'react';
import ME from '../images/my-image/me.png'
const Banner = () => {
    return (
        <section style={{ backgroundColor: '#0A0826', color: 'white' }
        }>
            <div className="text-center">
                <h5>Hello I'm</h5>
                <h2>Mohammad Faysal</h2>
                <h5 className='mb-3'>Front-end-developer</h5>
                <button className='btn btn-outline-success me-2'>Contact Me</button>
                <button className='btn btn-outline-success'>Download Resume</button>
            </div>
            <div className="d-flex justify-content-center mt-3 ">
                <img src={ME} alt="" className='w-25 border border-success rounded-circle' />
            </div>
        </section >
    );
};

export default Banner;