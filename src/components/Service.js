import React from 'react';
import { MdOutlineIntegrationInstructions, MdOutlineRestorePage } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { } from 'react-icons/io'
import { FiDatabase } from 'react-icons/fi'
const Services = () => {
    const services = [
        {
            icon: <BsCodeSlash></BsCodeSlash>,
            name: "Web Development",
            description: "I can do interesting and beautiful web designs and develop them. According to the needs of my clients."
        },
        {
            icon: <GiSmartphone></GiSmartphone>,
            name: "Responsive Design",
            description: "I can also design Responsive Websites for that you can use your website in any devices."
        },
        {
            icon: <MdOutlineRestorePage></MdOutlineRestorePage>,
            name: "React SPA",
            description: "I can create single-page applications using React JS."
        },
        {
            icon: <FiDatabase></FiDatabase>,
            name: "Full Stack Project",
            description: "I can create single-page Mern Stack project using React js, Node Js, MongoDB."
        },
        {
            icon: <MdOutlineIntegrationInstructions></MdOutlineIntegrationInstructions>,
            name: "Bugs Fix",
            description: "I can fix any bug in any of the technologies mentioned above."
        }
    ]
    return (
        <section className='container pt-5'>
            <div className="text-center p-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}>My Services</h2>
                <h5 style={{ color: 'rgba(255, 255, 255, 0.6)' }}>What I Offer</h5>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(({ icon, name, description }, index) => <div key={index} class="col">
                        <div class="card">
                            <div class="card-body" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
                                <h5 class="card-title" style={{ color: 'rgba(77, 181, 255, 1)' }}>{name} {icon}</h5>
                                <p class="card-text">{description}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </section>
    );
};

export default Services;