import React from 'react';
import Strong1 from '../images/projects-image/strong-gyem-home.png'
import Strong2 from '../images/projects-image/strong-gym-aboute.png'
import Strong3 from '../images/projects-image/strong-gym-login.png'
import Cap1 from '../images/projects-image/cap-collection.png'
import Cap2 from '../images/projects-image/cap-with-selected.png'
import Cap3 from '../images/projects-image/selected-cap.png'
import Phone1 from '../images/projects-image/iphone.png'
import Phone2 from '../images/projects-image/samsung.png'
import Phone3 from '../images/projects-image/oppo.png'
import Calculet1 from '../images/projects-image/calculet-image-with-incom.png'
import Calculet2 from '../images/projects-image/calculet-image.png'
import Calculet3 from '../images/projects-image/calculet-income.png'
import Convention1 from '../images/projects-image/convention-home.png'
import Convention2 from '../images/projects-image/convention-package.png'
import Convention3 from '../images/projects-image/convention-asked.png'
import Influencer1 from '../images/projects-image/influencer-banner.png'
import Influencer2 from '../images/projects-image/influencer-products.png'
import Influencer3 from '../images/projects-image/influencer.png'
import { FaRegEye } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
const Project = () => {
    const navigate = useNavigate()
    const handleDetail = id => {
        navigate(`/project/${id}`)
    }

    const projects = [
        {
            id: 1,
            image1: Strong1,
            image2: Strong2,
            image3: Strong3,
            name: 'STRONG GYM',
            github: <a href="https://github.com/MohammadFaysal731/independent-service-provider-a10" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://independent-service-prov-f1a49.web.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
            technology: '> React > Firebase > React-Firebase-Hooks  > React-hook-form > JavaScript > React-toastify >React icons',
            framework: '> React-Bootstrap',
        },
        {
            id: 2,
            image1: Cap1,
            image2: Cap2,
            image3: Cap3,
            name: 'Cap Collection',
            github: <a href="https://github.com/MohammadFaysal731/cap-calactions-a8" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://cap-collection.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
            technology: '> React > React icons',
            framework: 'HTML > CSS > JavaScript',
        },
        {
            id: 3,
            image1: Phone1,
            image2: Phone2,
            image3: Phone3,
            name: 'Pic Your Phone',
            github: <a href="https://github.com/MohammadFaysal731/pick-your-phone-a6" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://pick-your-phone-on-you-buzzet.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
            technology: '> HTML > JavaScript > API Call',
            framework: '> Bootstrap',
        },
        {
            id: 4,
            image1: Calculet1,
            image2: Calculet2,
            image3: Calculet3,
            name: 'Calculate My Monthly Income',
            github: <a href="https://github.com/MohammadFaysal731/calculalte-my-monthly-income-a5" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://calculate-my-monthly-income.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
            technology: '> HTML > CSS > JavaScript',
            framework: '> Bootstrap',
        },
        {
            id: 5,
            image1: Convention1,
            image2: Convention2,
            image3: Convention3,
            name: 'Convention Center',
            github: <a href="https://github.com/MohammadFaysal731/convention-center-a3" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://pedantic-wozniak-894080.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
            technology: '> HTML > FontAwesome',
            framework: '> Bootstrap',
        },
        {
            id: 6,
            image1: Influencer1,
            image2: Influencer2,
            image3: Influencer3,
            name: 'Influencer Products',
            github: <a href="https://github.com/MohammadFaysal731/influencer-products-a2" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://influncerproducts-vainla-css.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye style={{ color: 'rgba(77, 181, 255, 1)' }}></FaRegEye></a>,
            technology: '>HTML > CSS > FontAwesome',
            framework: '>',

        },
    ]
    return (




        <section className='container pt-5'>
            <div className="text-center p-3">
                <h2 style={{ color: 'rgba(77, 181, 255, 1)' }}>My Projects</h2>
                <h5 style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Recent Work</h5>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4" >
                {
                    projects.map(({ id, image1, image2, image3, name, github, live, technology, framework }) => <div key={id} class="col">
                        <div class="card">
                            <div class="card-body" style={{ backgroundColor: '#0A0826', color: 'white' }}>
                                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={image1} class="d-block w-100" alt="..." style={{ width: '400px', height: '400px' }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image2} class="d-block w-100" alt="..." style={{ width: '400px', height: '400px' }} />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={image3} class="d-block w-100" alt="..." style={{ width: '400px', height: '400px' }} />
                                        </div>
                                    </div>
                                </div>
                                <h5 class="card-title" style={{ color: 'rgba(77, 181, 255, 1)' }}>{name}</h5>
                                <div class="card-text" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                    <article>Technology:
                                        <p style={{ color: 'rgba(77, 181, 255, 1)' }}>{technology}</p>
                                    </article>
                                    <article>Framework:
                                        <p style={{ color: 'rgba(77, 181, 255, 1)' }}>{framework}</p>
                                    </article>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p style={{ color: 'rgba(77, 181, 255, 1)' }}>Github{github}</p>
                                    <p style={{ color: 'rgba(77, 181, 255, 1)' }}>Live{live}</p>
                                    <button onClick={() => handleDetail(id)} className='btn rounded' style={{ backgroundColor: '#0A0826', color: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(77, 181, 255, 1)' }}>Details</button >
                                </div>
                            </div>
                        </div>

                    </div>

                    )
                }

            </div>
        </section >
    );
};

export default Project;