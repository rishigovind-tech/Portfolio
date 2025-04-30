import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "./Button";

const About = () => {

  const [copy,setCopy]=useState(false);

  const handleCopy=()=>{
    navigator.clipboard.writeText('rishigovind36@gmail.com');
    setCopy(true);
    setTimeout(()=>{
      setCopy(false);
    },2000)
  }
  return (
    <section className="c-space my-20">
      <div className=" grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
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
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 11.0736,
                    lng: 76.074,
                    text: "I'm here!",
                    color: "white",
                    size: 30,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m comfortable working across time zones and collaborating from
                anywhere.
              </p>
              <p className="grid-subtext">
                I'm based in India,with remote work available
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and bringing ideas to life through code.
                Coding isn't just a career for me — it's what drives and excites
                me every day.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

            <div className="space-y-2 ">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}> 
                <img src={copy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">rishigovind36@gmail.com</p>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
