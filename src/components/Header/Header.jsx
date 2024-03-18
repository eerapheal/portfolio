"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (index) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <header
        className={`${
          isScrolled ? "headerShow" : ""
        }  w-full fixed top-0 transition-all z-50 duration-500`}
        style={{
          backgroundColor: isScrolled ? "#fff" : "transparent",
          boxShadow: isScrolled ? "#48afde 2px 2px 2px 2px" : "",
        }}
      >
        <nav className=" flex justify-between  flex-row items-center h-24 invisible lg:visible xl:max-w-4xl 2xl:max-w-7xl m-auto">
          <Link
            href="#home"
            className="menu-item text-2xl uppercase font-bold text-[#47aede] py-2 px-5 transition-all duration-400 ease-in-out md:py-2 lg:py-3 lg:px-5 hover:text-white hover:bg-[#223740] hover:show-lg transform hover:translate-y-1"
          >
            santtech
          </Link>
          <ul className="flex justify-end flex-row items-center gap-10 h-24">
            <li className=" group text-2xl relative font-bold">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="#home"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(0)}
              >
                Home
              </Link>
            </li>
            <li className=" group text-2xl relative font-bold">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="#portfolio"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(1)}
              >
                Portfolio
              </Link>
            </li>
            <li className=" group text-2xl relative font-bold">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="#about"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(3)}
              >
                About
              </Link>
            </li>
            <li className=" group text-2xl relative font-bold">
              {selectedIndex === 0 ? (
                <span className="menu-effect transform opacity-100 -rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              ) : (
                <span className="menu-effect transform opacity-100 rotate-12 group-hover:rotate-12  group-hover:opacity-100"></span>
              )}
              <Link
                href="#contact"
                className={`menu-item ${
                  selectedIndex === 0 ? "text-black" : ""
                } text-[#666d47] group-hover:text-gray-800`}
                onClick={() => setSelectedIndex(2)}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* mobile */}
        <nav
          className={`${
            isScrolled ? "headerShow" : ""
          } w-full fixed top-0 flex justify-between px-2 items-center  flex-row lg:invisible bg-white md:bg-transparent transition-all z-50 duration-500 h-24`}
        >
          <div className="relative mb-7 ml-2">
            <div
              className="z-30 absolute cursor-pointer flex justify-center items-center"
              onClick={toggleMenu}
            >
              <div className="relative w-7 h-7 flex justify-center items-center">
                {isOpen ? (
                  <h1 className=" text-6xl  text-white">x</h1>
                ) : (
                  <>
                    <div className="flex flex-col">
                      <span className="h-1 w-10 m-1 bg-black"></span>
                      <span className="h-1 w-10 m-1 bg-black"></span>
                      <span className="h-1 w-10 m-1 bg-black"></span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {isOpen && (
            <div
              className={`md:hidden absolute top-0 pt-[200px] left-0 right-0 bg-opacity-95 w-full h-screen transition-all bg-[#223740] ${
                isOpen ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <ul
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex flex-col items-center text-[#fff]"
              >
                <li className="text-4xl font-bold mb-6 hover:text-gray-400">
                  <Link href="#home" onClick={() => handleMenuItemClick(0)}>
                    Home
                  </Link>
                </li>
                <li className="text-4xl font-bold mb-6 hover:text-gray-400">
                  <Link
                    href="#portfolio"
                    onClick={() => handleMenuItemClick(1)}
                  >
                    Portfolio
                  </Link>
                </li>

                <li className="text-4xl font-bold mb-6 hover:text-gray-400">
                  <Link href="#about" onClick={() => handleMenuItemClick(3)}>
                    About
                  </Link>
                </li>
                <li className="text-4xl font-bold mb-6 hover:text-gray-400">
                  <Link href="#contact" onClick={() => handleMenuItemClick(2)}>
                    Contact
                  </Link>
                </li>
              </ul>

              <div
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-5 justify-center mt-8"
              >
                <Link href="https://github.com/eerapheal" target="_blank">
                  <Image
                    src="/GitHub-Logo.png"
                    alt="GitHub"
                    className="w-10 h-10 rounded-2xl"
                    width={50}
                    height={50}
                    priority
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
                    width={50}
                    height={50}
                    priority
                  />
                </Link>
                <Link
                  href="https://medium.com/@ekpenisiraphael"
                  target="_blank"
                >
                  <Image
                    src="/medium.jpg"
                    alt="Medium"
                    className="w-10 h-10 rounded-2xl"
                    width={50}
                    height={50}
                    priority
                  />
                </Link>
                <Link
                  href="https://twitter.com/ekpenisiraphael"
                  target="_blank"
                >
                  <Image
                    src="/twitter-icon.jpeg"
                    alt="Twitter"
                    className="w-10 h-10 rounded-3xl"
                    width={50}
                    height={50}
                    priority
                  />
                </Link>
              </div>
            </div>
          )}
          {isOpen ? (
            ""
          ) : (
            <Link
              href="#home"
              className="menu-item text-2xl uppercase font-bold  text-[#47aede] transition-all duration-400 ease-in-out hover:text-white hover:bg-[#223740] hover:show-lg transform hover:translate-y-1"
            >
              santtech
            </Link>
          )}
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
