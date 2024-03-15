"use client";
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const Footer = () => {
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

  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="container m-auto p-10 bg:white">
        <div className="container m-auto">
          <div
            className="max-w-sm md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-2xl z-20"
            style={{
              boxShadow: "#48afde -7px 20px 50px 7px",
            }}
          >
            <div className="sm:py-6 lg:py-10 cursor-all-scroll">
              <Slider {...settings} className="ml-5">
                <Image src="/js.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority />
                <Image src="/css.jpeg" alt="lang logo" className="h-12" width={20} height={20} />
                <Image src="/html.jpeg" alt="lang logo" className="h-12" width={20} height={20} />
                <Image src="/react.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/redux.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/next.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/ruby.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/rails.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/psql.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/mongo.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/node.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/express.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/prisma.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
                <Image src="/mysql.jpeg" alt="lang logo" className="h-12" width={20} height={20} priority/>
              </Slider>
            </div>
          </div>
        </div>
        <div className="container m-auto flex flex-col md:flex-row justify-around items-center mt-[100px]">
          <div>
            <h2 className="text-[#223740] mb-5 text-2xl font-semibold">
              Santtech ©{currentYear} Reserved
            </h2>
          </div>
          <div className="flex gap-5 justify-center">
            <Link href="https://github.com/eerapheal" target="_blank">
              <Image
                src="/GitHub-Logo.png"
                alt="GitHub"
                className="w-10 h-10 rounded-2xl"
                width={20} height={20} priority
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ekpenisiraphael/"
              target="_blank"
            >
              <Image
                src="/linkedin-icon.jpeg"
                alt="LinkedIn"
                className="w-10 h-10 rounded-2xl"
                width={20} height={20} priority
              />
            </Link>
            <Link href="https://medium.com/@ekpenisiraphael" target="_blank">
              <Image
                src="/medium.jpg"
                alt="Medium"
                className="w-10 h-10 object-cover rounded-2xl"
                width={20} height={20} priority
                
              />
            </Link>
            <Link href="https://twitter.com/ekpenisiraphael" target="_blank">
              <Image
                src="/twitter-icon.jpeg"
                alt="Twitter"
                className="w-10 h-10 rounded-3xl"
                width={20} height={20} priority
              />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
