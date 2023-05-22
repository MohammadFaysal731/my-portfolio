import React, { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from './Loading';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading]=useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(
          "https://precious-crab-jumpsuit.cyclic.app/project"
        )
          .then((res) => res.json())
          .then((data) => {
            setProjects(data)
            setLoading(false)
        });
    }, [])
    if(loading){
        return <Loading/>
    }
    const handleDetail = id => {
        navigate(`/project/${id}`)
    }

    return (
      <section className="container pt-5 user-select-none">
        <div className="text-center p-3">
          <h2
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            style={{ color: "rgba(77, 181, 255, 1)" }}
          >
            My All Projects
          </h2>
          <h5
            data-aos="fade-down"
            data-aos-delay="1500"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            Recent Work
          </h5>
        </div>
        <div className="row row-cols-1 g-4">
          {projects.map(
            ({
              _id,
              image1,
              image2,
              image3,
              name,
              github,
              live,
              technology,
              framework,
            }) => (
              <div
                key={_id}
                className="col"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="card">
                  <div
                    className="card-body row "
                    style={{ backgroundColor: "#0A0826", color: "white" }}
                  >
                    <div
                      className="col-6"
                      style={{ backgroundColor: "#0A0826", color: "white" }}
                    >
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                      >
                        <SwiperSlide>
                          <img
                            src={image1}
                            alt=""
                            style={{ width: "400px", height: "400px" }}
                            className="w-100"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={image2}
                            alt=""
                            style={{ width: "400px", height: "400px" }}
                            className="w-100"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={image3}
                            alt=""
                            style={{ width: "400px", height: "400px" }}
                            className="w-100"
                          />
                        </SwiperSlide>
                      </Swiper>
                      <h5
                        className="card-title"
                        style={{ color: "rgba(77, 181, 255, 1)" }}
                      >
                        {name}
                      </h5>
                    </div>
                    <div
                      className="card-text col-6"
                      style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      <article>
                        Technology:
                        <p style={{ color: "rgba(77, 181, 255, 1)" }}>
                          {technology}
                        </p>
                      </article>
                      <article>
                        Framework:
                        <p style={{ color: "rgba(77, 181, 255, 1)" }}>
                          {framework}
                        </p>
                      </article>
                      <div className="d-flex justify-content-between align-items-center">
                        <p style={{ color: "rgba(77, 181, 255, 1)" }}>
                          Github{" "}
                          <a href={github} target="_blank" rel="noreferrer">
                            <BsGithub
                              style={{ color: "rgba(77, 181, 255, 1)" }}
                            ></BsGithub>
                          </a>
                        </p>
                        <p style={{ color: "rgba(77, 181, 255, 1)" }}>
                          Live{" "}
                          <a href={live} target="_blank" rel="noreferrer">
                            <FaRegEye
                              style={{ color: "rgba(77, 181, 255, 1)" }}
                            ></FaRegEye>
                          </a>
                        </p>
                        <button
                          onClick={() => handleDetail(_id)}
                          className="btn rounded"
                          style={{
                            backgroundColor: "#0A0826",
                            color: "rgba(255, 255, 255, 0.6)",
                            border: "1px solid rgba(77, 181, 255, 1)",
                          }}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
};

export default Projects;