import React from "react";
import { myProjects } from "../constants";

const Project = () => {
  const currentproject = myProjects[0];
  return (
    <section className="c-space my-20">
      <p className="head-text">My Projects</p>

      <div className="grid lg:grid-col-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:py-10 py-10 px-5 shadow-2xl">
          <div className=" absolute top-0 right-0">
            <img
              src={currentproject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentproject.logoStyle}
          >
            <img
              src={currentproject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentproject.title}
            </p>
            <p className="animatedText">{currentproject.desc}</p>
            <p className="animatedText">{currentproject.subdesc}</p>
          </div>

          <div className=" flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentproject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a className="flex items-center gap-2 cursor-pointer text-white-600 " href={currentproject.href} target="_blank" rel="noreferrer">
              <p>Check Git Repo</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow"  />
            </a>
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
