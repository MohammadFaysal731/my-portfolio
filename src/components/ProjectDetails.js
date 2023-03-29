import React from 'react';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { EffectCube, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(
          `https://my-portfolio-server-production-3607.up.railway.app/project/${id}`
        )
          .then((res) => res.json())
          .then((data) => setProject(data));
    }, [id]);
    return (
        <section className='container pt-5 user-select-none'>
            <div className="row row-cols-1 row-cols-md-1 g-4 ">
                <div className="col">
                    <div className="card">
                        <div style={{
                            backgroundColor: '#0A0826', color: 'rgba(77, 181, 255, 1)'
                        }}>
                            < Swiper
                                effect={"cube"}
                                grabCursor={true}
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                pagination={true}
                                modules={[EffectCube, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={project?.image1} alt="" style={{ width: '400px', height: '400px' }} className='w-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={project?.image2} alt="" style={{ width: '400px', height: '400px' }} className='w-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={project?.image3} alt="" style={{ width: '400px', height: '400px' }} className='w-100' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="card-body" style={{ backgroundColor: '#0A0826', color: 'rgba(77, 181, 255, 1)' }}>
                            <h5 style={{ color: 'rgba(77, 181, 255, 1)' }}>{project?.name}</h5>
                            <div className="card-text" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                <article>
                                    Technology:
                                    <p style={{ color: 'rgba(77, 181, 255, 1)' }}>{project?.technology}</p>
                                </article>
                                <article>
                                    Framework:
                                    <p style={{ color: 'rgba(77, 181, 255, 1)' }}>{project?.framework}</p>
                                </article>
                            </div>
                            <div style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                Features:
                                <blockquote style={{ color: 'rgba(77, 181, 255, 1)' }}>{project?.features}</blockquote>
                            </div>
                            <div className="d-flex justify-content-end align-items-center">
                                <p className='p-3' style={{ color: 'rgba(77, 181, 255, 1)' }}>Github <a href={project?.github} target="_blank" rel="noreferrer"><BsGithub style={{ color: 'rgba(77, 181, 255, 1)' }}></BsGithub></a></p>
                                <p className='p-3' style={{ color: 'rgba(77, 181, 255, 1)' }}>Live <a href={project?.live} target="_blank" rel="noreferrer"><FaRegEye style={{ color: 'rgba(77, 181, 255, 1)' }}></FaRegEye></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default ProjectDetails;