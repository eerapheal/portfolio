"use client";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <div
        className="home"
        style={{
          backgroundImage:
            "linear-gradient(80deg, #eef7fb 0 60%,  #C9F6FF 0% 100%)",
          paddingTop: "140px",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="text-center">
              <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                What do I provide
              </h2>
              <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font[500] text[16px] loading-7">
                I&rsquo;m a Full Stack Developer with expertise in both
                front-end and back-end technologies. I have a passion for
                building dynamic and responsive web applications and have
                experience working with a variety of technologies including
                HTML, CSS, JavaScript, React/Redux, Postgresql, Ruby and Ruby on
                Rails. I am comfortable working on both the client and server
                side of a web application and have a proven track record of
                delivering high-quality, functional, and user-friendly websites.
                I am always eager to learn new technologies.
              </p>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
              <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
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
                              I have a passion for building dynamic and
                              responsive web applications and have experience
                              working with a variety of technologies
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <img className="" src="/images/front-end.png" alt="lineball" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* right */}
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
