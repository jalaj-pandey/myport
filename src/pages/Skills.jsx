import React, { useState } from "react";
import {
  HTML_Logo,
  CSS_Logo,
  JavaScript_Logo,
  Java_Logo,
  Bootstrap_Logo,
  React_Logo,
  C_Logo,
  Github_Logo,
  Firebase_Logo,
  Linux_Logo,
  VSCode_Logo,
  Tailwind_Logo,
  Python_Logo,
  Node_Logo,
  Postman_Logo,
  Express_Logo,
  Mongo_Logo,
} from "../assets/images/index";

function Skills() {
  const [name, setName] = useState(null);
  const handleLeave = (name) => {
    setName(name);
  };
  return (
    <div className="pb-5 h-auto my-20" id="skills">
      <div className="text-3xl min-[426px]:text-6xl text-center font-bold flex justify-center items-center ">
        <h1 className="text-3xl min-[426px]:text-6xl">Skills</h1>
        <div className="text-[#7e9199] max-[426px]:text-2xl">{name}</div>
      </div>

      <div className="flex max-sm:flex-col items-center justify-between mt-14 gap-10">

        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Languages</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("JavaScript")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img
                  src={JavaScript_Logo}
                  alt="JavaScript  "
                  className="h-10"
                />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Java")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Java_Logo} alt="Java" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("C")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={C_Logo} alt="C" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Python")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Python_Logo} alt="Python" className="h-12" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Frontend</h4>
            <div className="flex gap-5 max-sm:flex-wrap">
              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("React")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={React_Logo} alt="React" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Bootstrap")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Bootstrap_Logo} alt="Bootstrap" className="h-10" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Tailwind")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Tailwind_Logo} alt="Tailwind" className="h-12" />
              </div>
              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("CSS")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={CSS_Logo} alt="CSS" className="h-12" />
              </div>
              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("HTML")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={HTML_Logo} alt="HTML" className="h-12" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 max-sm:gap-5 max-sm:w-full">
          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Backend</h4>
            <div className="flex gap-5 max-[426px]:flex-wrap">
              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("NodeJs")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Node_Logo} alt="NodeJs" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Postman")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Postman_Logo} alt="Postman" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("MongoDB")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Mongo_Logo} alt="MongoDB" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Express")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Express_Logo} alt="Express" className="h-12" />
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-2xl">Other tools & Services</h4>
            <div className="flex gap-5 max-[426px]:flex-wrap">
              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Firebase")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Firebase_Logo} alt="Firebase" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Linux")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Linux_Logo} alt="Linux" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("Github")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img src={Github_Logo} alt="Github" className="h-12" />
              </div>

              <div
                className="p-1 h-16 w-16 flex justify-center items-center bg-white rounded-full hover:bg-slate-300"
                onMouseMove={() => setName("VS Studio Code")}
                onMouseLeave={() => handleLeave(null)}
              >
                <img
                  src={VSCode_Logo}
                  alt="Visual Studio Code"
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
