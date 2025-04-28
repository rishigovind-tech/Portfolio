import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className=" grid xl:grid-col-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I'm Rishi Govind</p>
              <p className="grid-subtext text-justify">
                With 5 months of internship experience, I have built a strong
                foundation in both frontend and backend development, creating
                responsive and user-friendly web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container flex items-center">
            <img
              src="/assets/grid02.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-full object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext text-justify">
                I specialize in the MERN stack, including MongoDB, Express,
                React, and Node.js, along with SQL. I also have experience with
                Socket.io for real-time communication and a basic understanding
                of Python, which helps me develop robust, scalable, and dynamic
                web applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
                <div className=" rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default About;
