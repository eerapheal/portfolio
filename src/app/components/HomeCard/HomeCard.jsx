import React from "react";

const HomeCard = () => {
  return (
    <React.Fragment>
      <div
        className="home"
        style={{
          backgroundImage:
            "linear-gradient(80deg, #eef7fb 0 60%,  #C9F6FF 0% 100%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="bg-white flex flex-col justify-center md:flex-row col-span-12 md-col-span-5 md:bg-transparent">
              <div className="container m-auto">
                <div className="sm:pl-10 lg:pl-24 pl-0 py-20 md:py-0 md:text-start text-center">
                  <p className="text-[#1c1641] text-3xl md:text-base lg:text-2xl text-semibold">
                    Hey There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-5xl lg:text-7xl mt-5 md:mt-3">
                    I&rsquo;m Raphael
                  </h1>

                  <h2 className="text-[#223740] font-bold uppercase md:text-xl py-2">
                    Full Stack Software Developer
                  </h2>
                  <a
                    href="/portfolio"
                    alt="project"
                    className="inline-block cursor-pointer bg-[#47aede] py-2 px-5 font-bold mt-8 uppercase transition-all duration-400 ease-in-out rounded-xl text-white md:py-2 md:mt-10 lg:py-3 lg:px-8 hover:bg-[#223740] hover:show-lg transform hover:translate-y-1"
                  >
                    Project
                  </a>
                  <a
                    href="raphael.pdf"
                    download="Ekpenisi E. raphael.pdf"
                    alt="resume"
                    className="ml-10 cursor-pointer inline-block bg-[#223740] py-2 px-5 font-bold mt-8 uppercase transition-all duration-400 ease-in-out rounded-xl text-white md:py-2 md:mt-10 lg:py-3 lg:px-8 hover:bg-[#47aede] hover:show-lg transform hover:translate-y-1"
                  >
                    My resume
                  </a>
                </div>
              </div>
              <div className="col-span-12 pt-[50px] md:bg-transparent bg-[#d9eef7] md:pt-[130px] md-col-span-7">
                <div className="container m-auto">
                  <img src="ralph.png" decoding="async" alt="profile pic" />
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
