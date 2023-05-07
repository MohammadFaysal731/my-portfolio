import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ME from '../images/my-image/me-2.png';
const Banner = () => {
    const { text } = useTypewriter({
        words: ['Front End Developer', 'Web Developer', 'React Developer', 'Meran Stack Developer'],
        loop: {},
    })
    return (
      <section className="p-5">
        <div
          className="text-center pt-3"
          style={{ color: "rgba(77, 181, 255, 1)" }}
        >
          <h5
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            Hello I'm
          </h5>
          <h2
            data-aos="fade-down"
            data-aos-delay="1500"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            Mohammad Faysal
          </h2>
          <h5
            data-aos="fade-down"
            data-aos-delay="2000"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
            className="mb-3"
            style={{ color: "rgba(77, 181, 255, 1)" }}
          >
            {" "}
            {text} <Cursor />
          </h5>
        </div>
        <div className="text-center pt-3">
          <Link
            data-aos="fade-up-right"
            data-aos-delay="2500"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            to="/contact"
            className="btn rounded me-2"
            style={{
              backgroundColor: "#0A0826",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(77, 181, 255, 1)",
            }}
          >
            Contact Me
          </Link>
          <a
            data-aos="zoom-in"
            data-aos-delay="2500"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            href="https://drive.google.com/file/d/1oMrNYXOR1dGSrVBHNwEP7_3BzrfAH1GC/view?usp=sharing"
            download
            target="_blank"
            className="btn  rounded"
            style={{
              backgroundColor: "#0A0826",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(77, 181, 255, 1)",
            }}
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="2500"
          data-aos-duration="3000"
          data-aos-easing="ease-in-out"
          className="d-flex justify-content-center m-3"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            className="m-2"
            style={{ color: "rgba(77, 181, 255, 1)" }}
            rel="noreferrer"
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            href="https://github.com/MohammadFaysal731"
            target="_blank"
            className="m-2"
            style={{ color: "rgba(77, 181, 255, 1)" }}
            rel="noreferrer"
          >
            <BsGithub></BsGithub>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="m-2"
            style={{ color: "rgba(77, 181, 255, 1)" }}
            rel="noreferrer"
          >
            <BsFacebook></BsFacebook>
          </a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            className="m-2"
            style={{ color: "rgba(77, 181, 255, 1)" }}
            rel="noreferrer"
          >
            <AiFillTwitterCircle></AiFillTwitterCircle>
          </a>
        </div>
        <div className="d-flex justify-content-center mt-3 ">
          <img
            data-aos="zoom-in"
            data-aos-delay="2500"
            data-aos-duration="3000"
            data-aos-easing="ease-in-out"
            src={ME}
            alt=""
            className="img-fluid"
          />
        </div>
      </section>
    );
};

export default Banner;