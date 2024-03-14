import React from "react";

const Page = () => {
  return (
    <React.Fragment>
      <div
        className="home flex items-center justify-center flex-col bg:opacity-95 bg-[#223740]"
        style={{
          backgroundImage:
            "linear-gradient(80deg, #eef7fb 0 60%,  #C9F6FF 0% 100%)",
          paddingTop: "100px",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div
          className=" flex items-center justify-center bg:opacity-95 bg-[#223740]"
          style={{
            backgroundImage: `url('images/Home.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
            width: "95%",
          }}
        >
          <div className="">
            <p className="p-[40px] text-white text-2xl sm:text-3xl md:text-5xl lg:text:7xl text-center">
              Absolutely! I&rsquo;m all ears for discussing new projects or any topic
              you fancy. Just drop me a line about what interests you, and we&rsquo;ll
              dive right in!
            </p>
          </div>
        </div>
        <div className="container m-auto">
          <div className="grid grid-flow-col-12">
            <div className="container">
              <div className="flex items-center justify-center m-10">
                <h2 className=" text-smallTextColor text-2xl sm:text-3xl md:text-5xl lg:text:7xl">
                  Get In Touch
                </h2>
              </div>
              <div className="md:flex justify-between items-stretch">
                <div className="flex-1 md:max-w-1/2 h-[300px] sm:h-[450px]">
                  <iframe
                    title="google-maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796851258!2d77.04417103118192!3d28.5275544098874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1687094554975!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="flex-1 mt-8 md:mt-0 md:max-w-1/2 sm:h-[450px] lg:flex items-center px-lg:px-8 py-8">
                  <form className="w-full p-5">
                    <div className="mb-5">
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                      />
                    </div>
                    <div className="mb-5">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                      />
                    </div>
                    <div className="mb-5">
                      <textarea
                        placeholder="Type your message here"
                        className="w-full p-3 focus:outline-none rounded-[5px]"
                      ></textarea>
                    </div>
                    <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                      Get in touch
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
