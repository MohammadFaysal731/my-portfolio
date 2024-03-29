import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3, DiNodejs } from 'react-icons/di';
import { FaReacteurope } from 'react-icons/fa';
import { SiBootstrap, SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrandJavascript, TbBrandTailwind } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
const HomeSkill = () => {
    const navigate = useNavigate()

    const handelSkills = () => {
        navigate('/skills')
    }

    const frontEnd = [
        {
            icon: <AiOutlineHtml5></AiOutlineHtml5>,
            name: 'HTML',
            detail: 'Experienced'
        },
        {
            icon: <DiCss3></DiCss3>,
            name: 'CSS',
            detail: 'Experienced'
        },
        {
            icon: <TbBrandJavascript></TbBrandJavascript>,
            name: 'JavaScript',
            detail: 'Experienced'
        },
        {
            icon: <SiBootstrap></SiBootstrap>,
            name: 'Bootstrap',
            detail: 'Experienced'
        },
        {
            icon: <FaReacteurope></FaReacteurope>,
            name: 'React Bootstrap',
            detail: 'Experienced'
        },
        {
            icon: <TbBrandTailwind></TbBrandTailwind>,
            name: 'Tailwind',
            detail: 'Experienced'
        },
    ]
    const backend = [
        {
            icon: <DiNodejs></DiNodejs>,
            name: 'Nodejs',
            detail: 'Intermediate'
        },
        {
            icon: <SiExpress></SiExpress>,
            name: 'Express',
            detail: 'Intermediate'
        },
        {
            icon: <SiMongodb></SiMongodb>,
            name: 'Mongodb',
            detail: 'Intermediate',
        }

    ]

    return (
        <section className='container pt-5' style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
            <div className="text-center p-3">
                <h2
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(77, 181, 255, 1)' }}>My Skills</h2>
                <h5
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}>What Skill I Have</h5>
            </div>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
                <div
                    data-aos="fade-down-right"
                    data-aos-delay="1500"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    className="col">
                    <div className="card border" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
                        <div className="card-body" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }} >
                            <h5 className="card-title text-center" style={{ color: 'rgba(77, 181, 255, 1)' }}>Frontend Development</h5>
                            <div className="row">
                                {
                                    frontEnd.map(({ icon, name, detail }, index) => <article
                                        data-aos="flip-down"
                                        data-aos-delay="2500"
                                        data-aos-duration="3000"
                                        data-aos-easing="ease-in-out"
                                        key={index} className="m-3 user-select-none " style={{ border: '1px solid rgba(77, 181, 255, 1)', borderRadius: '10px', whiteSpace: ' nowrap', width: 'fit-content' }}>
                                        <div className="p-3">
                                            <h1>{icon}</h1>
                                            <p>{name}</p>
                                            <p>{detail}</p>
                                        </div>
                                    </article>
                                    )
                                }
                            </div>

                            <button
                                data-aos="flip-down"
                                data-aos-delay="2500"
                                data-aos-duration="3000"
                                data-aos-easing="ease-in-out"
                                onClick={handelSkills} className=' rounded' style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(77, 181, 255, 1)' }}>See More</button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-down-left"
                    data-aos-delay="2000"
                    data-aos-duration="2500"
                    data-aos-easing="ease-in-out"
                    className="col">
                    <div className="card border" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
                        <div className="card-body" style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
                            <h5 className="card-title text-center" style={{ color: 'rgba(77, 181, 255, 1)' }}>Backend Development</h5>
                            <div className="row">
                                {
                                    backend.map(({ icon, name, detail }, index) => <article
                                        data-aos="flip-down"
                                        data-aos-delay="2500"
                                        data-aos-duration="3000"
                                        data-aos-easing="ease-in-out"
                                        key={index} className=' m-3 user-select-none' style={{ border: '1px solid rgba(77, 181, 255, 1)', borderRadius: '10px', whiteSpace: ' nowrap', width: 'fit-content' }}>
                                        <div className="p-3">
                                            <h1>{icon}</h1>
                                            <p>{name}</p>
                                            <p>{detail}</p>
                                        </div>
                                    </article>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HomeSkill;