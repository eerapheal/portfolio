import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeCard = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    loop: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

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
          <div className="container m-auto absolute">
            <div
              className="relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
              style={{
                boxShadow: "#48afde -7px 20px 50px 7px",
              }}
            >
              <div className="sm:py-6 lg:py-10 cursor-all-scroll">
                <Slider {...settings} className="ml-5">
                  <img src="/js.jpeg" alt="lang logo" className="h-12" />
                  <img src="/css.jpeg" alt="lang logo" className="h-12" />
                  <img src="/html.jpeg" alt="lang logo" className="h-12" />
                  <img src="/react.jpeg" alt="lang logo" className="h-12" />
                  <img src="/redux.jpeg" alt="lang logo" className="h-12" />
                  <img src="/next.jpeg" alt="lang logo" className="h-12" />
                  <img src="/ruby.jpeg" alt="lang logo" className="h-12" />
                  <img src="/rails.jpeg" alt="lang logo" className="h-12" />
                  <img src="/psql.jpeg" alt="lang logo" className="h-12" />
                  <img src="/mongo.jpeg" alt="lang logo" className="h-12" />
                  <img src="/node.jpeg" alt="lang logo" className="h-12" />
                  <img src="/express.jpeg" alt="lang logo" className="h-12" />
                  <img src="/prisma.jpeg" alt="lang logo" className="h-12" />
                  <img src="/mysql.jpeg" alt="lang logo" className="h-12" />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeCard;
