import React, { useEffect, useState } from 'react';
import { BsGithub } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from './Loading';
const HomeProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
  useEffect(() => {
    fetch("https://precious-crab-jumpsuit.cyclic.app/project")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
   const handleDetail = (id) => {
     navigate(`/project/${id}`);
   };
  return (
    <div className="mx-auto m-5">
      <div className="text-center p-3">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          style={{ color: "rgba(77, 181, 255, 1)" }}
          className="mb-4"
        >
          My Projects
        </h2>
        <h5
          data-aos="fade-down"
          data-aos-delay="1500"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          style={{ color: "rgba(255, 255, 255, 0.6)" }}
          className="mb-5"
        >
          Recent Work
        </h5>
      </div>
      <div
        className=""
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2500"
      >
        <Swiper
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {projects?.map(
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
              <SwiperSlide className="w-50 mb-5" key={_id}>
                <img
                  src={image1}
                  alt=""
                  style={{ width: "400px", height: "400px" }}
                  className="w-100"
                />
                {/* title  */}
                <h4>{name}</h4>
                {/* information */}
                <div>
                  <div
                    className="card-text row"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  >
                    <article className="col-6">
                      Technology:
                      <p style={{ color: "rgba(77, 181, 255, 1)" }}>
                        {technology}
                      </p>
                    </article>
                    <article className="col-6">
                      Framework:
                      <p style={{ color: "rgba(77, 181, 255, 1)" }}>
                        {framework}
                      </p>
                    </article>
                  </div>
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
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProject;