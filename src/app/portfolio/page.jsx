"use client";
import React, { useState, useEffect } from "react";
import data from "../assets/data/portfolioData";

const page = () => {
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  console.log(portfolios);

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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default page;
