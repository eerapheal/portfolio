"use client";
import React from "react";
import frontendImg from "../assets/images/front-end.png";
import backendImg from "../assets/images/backend.png";
import uiImg from "../assets/images/design.png";
import appsImg from "../assets/images/apps.png";

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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
