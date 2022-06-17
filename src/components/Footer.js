import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='container pt-5'>
            <div className="text-center p-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}> Mohammad Faysal</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>&copy; Copyright {year} &copy;</p>
                <p style={{ color: 'rgba(77, 181, 255, 1)' }}>All Rights Reserved. Prowered by the Mohammad Faysal</p>
            </div>
        </footer>
    );
};

export default Footer;