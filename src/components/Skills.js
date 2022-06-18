import React from 'react';
import { DiCss3 } from 'react-icons/di'
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { TbBrandJavascript, TbBrandTailwind, TbBrandReactNative } from 'react-icons/tb'
import { SiBootstrap, SiMongodb, SiExpress, SiReactrouter, SiReact, SiNetlify } from 'react-icons/si'
import { FaReacteurope, FaFontAwesomeFlag, FaFire } from 'react-icons/fa'
import { DiNodejs } from 'react-icons/di'
import { MdAnimation } from 'react-icons/md'
const Skills = () => {
    const skills = [
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
        {
            icon: <SiReactrouter></SiReactrouter>,
            name: 'React Router',
            detail: 'Experienced'
        },
        {
            icon: <FaFire></FaFire>,
            name: 'Firebase',
            detail: 'Experienced'
        },
        {
            icon: <TbBrandReactNative></TbBrandReactNative>,
            name: 'React Query',
            detail: 'Intermediate'
        },
        {
            icon: <SiReact></SiReact>,
            name: 'React Icon',
            detail: 'Experienced'
        },
        {
            icon: <FaFontAwesomeFlag></FaFontAwesomeFlag>,
            name: 'Font Awesome',
            detail: 'Experienced'
        },
        {
            icon: <MdAnimation></MdAnimation>,
            name: 'AOS',
            detail: 'Experienced'
        },
        {
            icon: <AiFillGithub></AiFillGithub>,
            name: 'GitHub',
            detail: 'Experienced'
        },
        {
            icon: <SiNetlify></SiNetlify>,
            name: 'Netlify',
            detail: 'Experienced'
        },
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
        <section className='container pt-3' style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)' }}>
            <div className="text-center p-3">
                <h2
                    data-aos="fade-down"
                    data-aos-delay="150"
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
            <div className="row">
                {
                    skills.map(({ icon, name, detail }) => <article
                        data-aos="flip-down"
                        data-aos-delay="1500"
                        data-aos-duration="2500"
                        data-aos-easing="ease-in-out"
                        className="m-3 user-select-none " style={{ border: '1px solid rgba(77, 181, 255, 1)', borderRadius: '10px', whiteSpace: ' nowrap', width: 'fit-content' }}>
                        <div className="p-3">
                            <h1>{icon}</h1>
                            <p>{name}</p>
                            <p>{detail}</p>
                        </div>
                    </article>)
                }
            </div>
        </section>
    );
};

export default Skills;