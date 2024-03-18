"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const HomeCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <div className="md:pt-15">
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="bg-red flex flex-col  pt-10 justify-center md:flex-row col-span-12 md-col-span-5 md:bg-transparent">
              <div className="container m-auto bg-white md:bg-transparent">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="sm:pl-10 lg:pl-24 pl-0 py-20 px-2 sm:px-0 text-center sm:text-start"
                >
                  <p
                    data-aos="fade-UP"
                    data-aos-duration="1500"
                    className="text-[#1c1641] text-3xl md:text-base lg:text-4xl text-semibold"
                  >
                    Hey There!
                  </p>
                  <h1 className="text-headingColor text-5xl lg:text-7xl mt-5 md:mt-3">
                    I&rsquo;m Raphael
                  </h1>
                  <h2
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className="text-primaryColor font-bold uppercase md:text-xl py-2"
                  >
                    Full Stack Software Developer
                  </h2>
                  <p
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="text-smallTextColor lg:pr-[90px] text-sm md:text-base lg:text-xl text-semibold"
                  >
                    Skilled in front-end and back-end technologies, including
                    HTML, CSS, JavaScript, React, NextJS, Redux, Postgresql,
                    Ruby, and Ruby on Rails. With experience in MERN Stack, I
                    deliver top-notch, user-friendly sites and am always eager
                    to learn new technologies.
                  </p>
                  <Link
                    href="#contact"
                    alt="project"
                    className="inline-block cursor-pointer bg-[#47aede] py-2 px-5 font-bold mt-8 uppercase transition-all duration-400 ease-in-out rounded-xl text-white md:py-2 md:mt-10 lg:py-3 lg:px-8 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1"
                  >
                    <i className="ri-mail-line mr-1"></i>Hire me
                  </Link>
                  <Link
                    href="raphael.pdf"
                    download="Ekpenisi E. raphael.pdf"
                    alt="resume"
                    className="ml-10 cursor-pointer inline-block bg-[#223740] py-2 px-5 font-bold mt-8 uppercase transition-all duration-400 ease-in-out rounded-xl text-white md:py-2 md:mt-10 lg:py-3 lg:px-8 hover:bg-[#47aede] hover:show-lg transform hover:translate-y-1"
                  >
                    My resume
                  </Link>
                  <div className="items-center gap-5 mt-5">
                    <span className="text-smallTextColor text-xl lg:2xl font-[500]">
                      connect with me:
                    </span>
                    <span>
                      <a
                        href="https://github.com/eerapheal"
                        className="text-smallTextColor text-[25px] font-[600]"
                        alt="GitHub"
                      >
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.twitter.com/ekpenisiraphael"
                        className="text-smallTextColor text-[25px] font-[600]"
                        alt="Twitter"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/ekpenisiraphael/"
                        className="text-smallTextColor text-[25px] font-[600]"
                        alt="Linkedin"
                      >
                        <i className="ri-linkedin-box-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.medium.com/@ekpenisiraphael/"
                        className="text-smallTextColor text-[25px] font-[600]"
                        alt="medium"
                      >
                        <i className="ri-medium-fill"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-12 pt-[50px] bg-transparent md:pt-[130px] md-col-span-7">
                <div
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  className="container m-auto flex justify-center items-center"
                >
                  <Image
                    src="/ralph.png"
                    decoding="async"
                    alt="profile pic"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeCard;
