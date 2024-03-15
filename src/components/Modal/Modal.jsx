import React from "react";

import portfolios from "@/app/assets/data/portfolioData";
import Image from "next/image";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  if (!portfolio) {
    return null;
  }

  return (
    <div className="w-full h-full fixed top-0 z-50 bg-headingColor bg-opacity-40 ">
      <div
        className="w-full md:max-w-[90%]  absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5"
        style={{
          boxShadow: "#48afde 2px 2px 5px 2px",
        }}
      >
        <div>
          <figure>
            <Image
              className="rounded-[8px] max-h-[320px]"
              src={portfolio.imgUrl}
              alt=""
              width={800}
              height={200}
              priority
            />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headimgColor font-[700] my-5">
            {portfolio.title}
          </h2>
          <p className="text-[15px] loading-7 text-smallTextColor font-xl font-semibold">
            {portfolio.description}
          </p>
          <div className="mt-5 flex items-center gap-3 font-xl font-semibold flex-wrap">
            <h4 className=" text-headimgColor font-[700] my-5">
              Tecthnologies:
            </h4>
            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 font-xl font-semibold rounded-[5px] text-[14px] loading-0"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <a href={portfolio.siteUrl}>
              <button className="text-white  hover:bg-headingColor bg-smallTextColor  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                Live Site
              </button>
            </a>
            <a href={portfolio.seeSourceUrl}>
              <button className="text-white bg-headingColor  hover:bg-smallTextColor  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                See Source
              </button>
            </a>
          </div>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.6rem] bg-[white] absolute top-5 right-5 text-[25px] flex items-center justify-center rounded-[3px] loading-o cursor-pointer"
          style={{ top: "1.7rem", right: "1.7rem" }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
