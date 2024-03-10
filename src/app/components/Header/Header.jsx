"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DiagonalDrawer from "./DiagonalDrawer";

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const OpenDrawer = () => {
    setIsOpen(true)
  };

  return (
    <React.Fragment>
      <div>
        <DiagonalDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        />
      </div>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        } fixed top-0 transition-all z-50 duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48afde -10px 25px 50px 10px" : "",
        }}
      >
        <nav className="invisible md:visible xl:max-w-4xl 2xl:max-w-7xl m-auto">
          <ul className="flex flex-row items-center h-24">
            <li className=" group text-2xl relative font-bold mr-20">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="/"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(0)}
              >
                Home
              </Link>
            </li>
            <li className=" group text-2xl relative font-bold mr-20">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="/portfolio"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(1)}
              >
                Portfolio
              </Link>
            </li>
            <li className=" group text-2xl relative font-bold mr-20">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="/contact"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(2)}
              >
                Contact
              </Link>
            </li>
            <li className=" group text-2xl relative font-bold mr-20">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="/hire-me"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(3)}
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
