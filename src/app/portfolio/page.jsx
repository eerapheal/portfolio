"use client";
import React, { useState, useEffect } from "react";
import data from "../assets/data/portfolioData";
import Modal from "@/components/Modal/Modal";
import Aos from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

const page = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState("false");
  const [activeID, setActiveID] = useState("null");
  const [nextItems, setNextItems] = useState(6);

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "Web Design") {
      const filteredData = data.filter(
        (item) => item.category === "Web Design"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "Ux") {
      const filteredData = data.filter((item) => item.category === "Ux");
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

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
            <div className="flex items-center justify-between flex-wrap">
              <div className="mb-7 sm:mb-0">
                <h3 className="text-headingColor text-[2rem] font-[700]">
                  My recent project
                </h3>
              </div>
              <div className="flex gap-3">
                <div className="flex ">
                  <button
                    onClick={() => setSelectTab("Web Design")}
                    className="text-smallTextColor border border-solid rounded-3xl border-smallTextColor py-2 px-4 hover:bg-sky-900 hover:text-white hover:border-none"
                  >
                    Web Design
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => setSelectTab("all")}
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-3xl hover:bg-sky-900 hover:text-white hover:border-none"
                  >
                    All
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => setSelectTab("Ux")}
                    className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-3xl hover:bg-sky-900 hover:text-white hover:border-none"
                  >
                    UX Design
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-wrap mt-12">
                {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                  <div
                    key={index}
                    data-aos="fade-zoom-in"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                    className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                  >
                    <figure>
                      <img
                        className="rounded-[8px]"
                        src={portfolio.imgUrl}
                        alt="portfolio"
                      />
                    </figure>
                    <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                      <div className="w-full h-full flex items-center justify-center">
                        <button
                          onClick={() => showModalHandler(portfolio.id)}
                          className="text-white bg-headingColor hover:bg-smallTextColor  py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                        >
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                {nextItems < portfolios.length && data.length > 6 && (
                  <button
                    onClick={loadMoreHandler}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
      </div>
    </React.Fragment>
  );
};

export default page;
