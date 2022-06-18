import React from 'react';
import { useParams } from 'react-router-dom';
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
const ProjectDetails = () => {
    const { id } = useParams();

    const projects = [
        {
            id: 1,
            image1: Strong1,
            image2: Strong2,
            image3: Strong3,
            name: 'STRONG GYM',
            github: <a href="https://github.com/MohammadFaysal731/independent-service-provider-a10" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://independent-service-prov-f1a49.web.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
        },
        {
            id: 2,
            image1: Cap1,
            image2: Cap2,
            image3: Cap3,
            name: 'Cap Collection',
            github: <a href="https://github.com/MohammadFaysal731/cap-calactions-a8" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://cap-collection.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
        },
        {
            id: 3,
            image1: Phone1,
            image2: Phone2,
            image3: Phone3,
            name: 'Pic Your Phone',
            github: <a href="https://github.com/MohammadFaysal731/pick-your-phone-a6" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://pick-your-phone-on-you-buzzet.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
        },
        {
            id: 4,
            image1: Calculet1,
            image2: Calculet2,
            image3: Calculet3,
            name: 'Calculate My Monthly Income',
            github: <a href="https://github.com/MohammadFaysal731/calculalte-my-monthly-income-a5" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://calculate-my-monthly-income.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
        },
        {
            id: 5,
            image1: Convention1,
            image2: Convention2,
            image3: Convention3,
            name: 'Convention Center',
            github: <a href="https://github.com/MohammadFaysal731/convention-center-a3" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://pedantic-wozniak-894080.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye></FaRegEye></a>,
        },
        {
            id: 6,
            image1: Influencer1,
            image2: Influencer2,
            image3: Influencer3,
            name: 'Influencer Products',
            github: <a href="https://github.com/MohammadFaysal731/influencer-products-a2" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><BsGithub></BsGithub></a>,
            live: <a href="https://influncerproducts-vainla-css.netlify.app/" target="_blank" style={{ color: 'rgba(255, 255, 255, 0.6)' }}><FaRegEye style={{ color: 'rgba(77, 181, 255, 1)' }}></FaRegEye></a>,

        },
    ]
    return (
        <section className='container pt-5'>

        </section >
    );
};

export default ProjectDetails;