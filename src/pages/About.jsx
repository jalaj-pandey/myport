import React from "react";
import jalaj from "../assets/images/jalaj.png"
function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-xl:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5">Hi, I'm Jalaj <span className="animate-wave inline-block">👋</span></h1>
          <p className="text-3xl max-md:text-base mb-5 font-light">
            I am a Frontend Developer from Uttarakhand. I have a passion
            for creating seamless, beautiful and creative websites, I have
            experience with various programming languages and specifically web
            technologies.
          </p>
          <a href="#contact" className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">GET IN TOUCH</a>
        </div>
        <div className=" group h-100 w-100  flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
        <img
          className="h-96 rounded transition-all duration-300 group-hover:scale-102 group-hover:rotate-12 max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={jalaj}
          alt=""
        />
        <div className="absolute h-full w-full  top-0 left-0"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
