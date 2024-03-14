"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <div
        className="home"
        style={{
          backgroundImage:
            "linear-gradient(80deg, #eef7fb 0 60%,  #C9F6FF 0% 100%)",
          paddingTop: "140px",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="text-center">
              <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font[500] text[16px] loading-7">
                I&rsquo;m a full-stack software developer who completed software
                development at Microverse. I’ve spent approximately 40 hours per
                week in remote software development in my last few months. I
                learned to communicate and collaborate with developers from all
                over the world. And most importantly, I’ve built numerous
                projects
              </p>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
              <div className="w-full py-3 px-2 sm:max-w-xl md:max-w-4xl :max-w-6xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                  {/* {===================== middle line} */}
                  <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform"></div>
                  {/* left */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Frontend Development
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              I specialize in creating user-friendly interfaces,
                              prioritizing technical proficiency for website
                              optimization, and implementing effective content
                              strategies to boost visibility and enhance user
                              experiences. My expertise includes utilizing
                              React/Next.js for frontend development,
                              incorporating Axios for data fetching, employing
                              Redux for state management, and integrating
                              RESTful APIs to build web applications.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <img
                            className=""
                            src="/images/front-end.png"
                            alt="lineball"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div
                            data-aos="fade-right"
                            data-aos-duration="1300"
                            data-aos-delay="50"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Backend Development
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              As a backend developer, I utilize my technical
                              proficiency to enhance website performance. My
                              skills encompass implementing Rails and Express
                              APIs, employing server-side rendering for
                              scalability, and managing data efficiently with
                              MongoDB and PostgreSQL. I remain updated with
                              industry trends to ensure continuous improvement
                              in my practices.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <img
                            className=""
                            src="/images/backend.png"
                            alt="lineball"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* left */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              SEO optimization
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              I specialize in technical proficiency for website
                              optimization, content strategy for improved
                              visibility, user experience focus for intuitive
                              design, ethical link building for authority, and
                              continuous adaptation to industry trends for
                              sustained success in search engine rankings.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <img
                            className=""
                            src="/images/apps.png"
                            alt="lineball"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div
                            data-aos="fade-right"
                            data-aos-duration="1300"
                            data-aos-delay="50"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              UI/UX Design
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              I&rsquo;m deeply passionate about creating
                              immersive and user-centric web experiences. With a
                              strong foundation in UI/UX principles, I leverage
                              a diverse toolkit of technologies including
                              Tailwind CSS, SCSS, Bootstrap, and others to bring
                              designs to life. My focus is on delivering
                              intuitive and visually compelling interfaces that
                              engage users and elevate brands.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <img
                            className=""
                            src="/images/design.png"
                            alt="lineball"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
