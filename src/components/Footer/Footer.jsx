"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="container m-auto p-10 bg:white">         
        <div className="container m-auto flex flex-col md:flex-row justify-around items-center">
          <div>
            <h2 className="text-[#223740] mb-2 text-[1rem] md:text-[1.8rem] font-semibold">
              Santtech ©{currentYear} Reserved
            </h2>
          </div>
          <div className="flex gap-5 justify-center">
            <Link href="https://github.com/eerapheal" target="_blank">
              <Image
                src="/GitHub-Logo.png"
                alt="GitHub"
                className="w-10 h-10 rounded-2xl"
                width={50} height={50} priority
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
                width={50} height={50} priority
              />
            </Link>
            <Link href="https://medium.com/@ekpenisiraphael" target="_blank">
              <Image
                src="/medium.jpg"
                alt="Medium"
                className="w-10 h-10 object-cover rounded-2xl"
                width={50} height={50} priority
                
              />
            </Link>
            <Link href="https://twitter.com/ekpenisiraphael" target="_blank">
              <Image
                src="/twitter-icon.jpeg"
                alt="Twitter"
                className="w-10 h-10 rounded-3xl"
                width={50} height={50} priority
              />
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
