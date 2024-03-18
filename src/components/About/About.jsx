"use client";
import "remixicon/fonts/remixicon.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Image from "next/image";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <React.Fragment>
      <div
        id="about"
        className="about"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="container m-auto pt-10">
          <div className="grid grid-flow-col-12">
            <div className="text-center">
              <p className="lg:max-w-[1000px] p-1 lg:mx-auto text-headingColor font[500] text[16px] md:text-2xl lg:text-2xl loading-7">
                I&rsquo;m a full-stack software developer who completed software
                development at Microverse. I&rsquo;ve spent approximately 40
                hours per week in remote software development in my last few
                months. I learned to communicate and collaborate with developers
                from all over the world. And most importantly, I&rsquo;ve built
                numerous projects
              </p>
            </div>
            <div className="flex flex-col justify-center sm:py-12">
              <div className="w-full overFlow-hidden py-3 px-2 sm:max-w-xl md:max-w-4xl :max-w-6xl sm:mx-auto sm:px-0">
                <div className="relative text-gray-700 antialiased text-sm font-semibold">
                  {/* {===================== middle line} */}
                  <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform"></div>
                  {/* left */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Frontend Development
                            </h3>
                            <p className="text-[14px]  text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              I specialize in creating user-friendly interfaces,
                              prioritizing technical proficiency for website
                              optimization, and implementing effective content
                              strategies to boost visibility and enhance user
                              experiences. My expertise includes utilizing
                              React/Next.js for frontend development,
                              incorporating Axios for data fetching, employing
                              Redux for state management, and integrating
                              RESTful APIs to build web applications.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/front-end.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div
                            data-aos="fade-right"
                            data-aos-duration="1300"
                            data-aos-delay="50"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Backend Development
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              As a backend developer, I utilize my technical
                              proficiency to enhance website performance. My
                              skills encompass implementing Rails and Express
                              APIs, employing server-side rendering for
                              scalability, and managing data efficiently with
                              MongoDB and PostgreSQL. I remain updated with
                              industry trends to ensure continuous improvement
                              in my practices.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/backend.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* left */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-start w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pr-8">
                          <div
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              SEO optimization
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              I specialize in technical proficiency for website
                              optimization, content strategy for improved
                              visibility, user experience focus for intuitive
                              design, ethical link building for authority, and
                              continuous adaptation to industry trends for
                              sustained success in search engine rankings.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/apps.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex items-center flex-col sm:flex-row">
                      <div className="flex justify-end w-full mx-auto items-center">
                        <div className="w-full sm:w-1/2 sm:pl-8">
                          <div
                            data-aos="fade-right"
                            data-aos-duration="1300"
                            data-aos-delay="50"
                            className="bg-white p-4 rounded shadow  group hover:bg-primaryColor cursor-pointer group-hover:font-[600] text-l ease-in duration-150"
                          >
                            <h3 className="text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[600] text-lx">
                              Framework & Tools/Methods
                            </h3>
                            <p className="text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] loading-7">
                              Jest | RSpec | Mocha | Tailwind CSS | SCSS |
                              Bootstrap | Material-UI | Cancancan | Devise |
                              JSON Web Tokens (JWT) | Figma | Git | GitHub |
                              GitLab | Heroku | Netlify | Render | Versel |
                              WordPress | Shopify | Hostinger | Namecheap |
                              Mobile/Responsive Development | Progressive Web
                              Apps (PWAs) UI/UX Design | Canvas API | Web
                              Accessibility (A11y) Automated Testing |
                              Continuous Integration/Continuous Deployment
                              (CI/CD) Agile Methodology | Scrum | Kanban Remote
                              Pair-Programming | Video Conferencing Tools (Zoom,
                              Microsoft Teams, etc.) Teamwork | Communication
                              Tools (Slack, Microsoft Teams, etc.) Mentorship |
                              Code Reviews | Knowledge Sharing Sessions Version
                              Control (Git) | Collaboration Platforms (GitHub,
                              GitLab) Agile Practices | Sprint Planning |
                              Retrospectives | Daily Standups
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform 
                                  -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                      >
                        <figure className="">
                          <Image
                            className=""
                            src="/images/design.png"
                            alt="lineball"
                            width={20}
                            height={20}
                            priority
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
