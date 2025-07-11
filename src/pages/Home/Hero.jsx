import React from "react";
import { Link } from "react-router-dom";
import MagneticHover from "../../components/MagneticHover";
import CubeGrids from "../../components/HoverGrids";

function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-cover relative overflow-clip"
    >
      <div className="absolute w-full h-full pointer-events-none bg-[url('/images/texture-bg.png')] bg-cover bg-fixed opacity-45" />
      {/* Hero Content */}
      <div className="w-full h-screen p-[100px] flex justify-between relative">
        <div className="absolute bottom-1 right-1 w-[15rem] h-[15rem] z-1">
          <CubeGrids
            rows={15}
            cols={15}
            width={240}
            height={240}
            baseColor="#90A1B9"
            startCorner="bottom-right"
          />
        </div>
        <MagneticHover className="flex flex-col justify-center items-start z-2 lg:w-[45%] md:w-full pl-8 pt-8 relative">
          <div className="absolute top-10 right-[-3rem] magnetic">
            <img
              src="/images/arrow.png"
              alt=""
              className="w-[320px] h-50 rotate-20"
            />
          </div>
          <div className="absolute bottom-0 right-[-3rem] magnetic">
            <img src="/images/star.svg" alt="" className="w-10 h-10 rotate-8" />
          </div>
          <div className="relative mb-2" data-aos="flip-down">
            <h5 className="text-lg uppercase tracking-wider pb-6">
              Let's Test your brain!
            </h5>
            <div
              className="absolute left-0 bottom-0 w-60 h-10 bg-no-repeat bg-blend-color bg-bottom-left"
              style={{ backgroundImage: "url('/images/stroke.svg')" }}
            />
          </div>
          <h1
            className="lg:text-7xl md:text-5xl font-extrabold leading-20 mb-4"
            data-aos="flip-down"
          >
            The best <span className="fuzzy-font">quiz</span> app from Qizzy.
          </h1>
          <p
            className="font-bold text-md mb-6 text-slate-400"
            data-aos="flip-down"
          >
            Get your hands dirty with the high-end online-based quizzes
            generated precisely by AI, built for students by students!
          </p>

          <Link to={""} className="btn mt-5" data-aos="fade-up">
            <span className="font-bold text-gray-50 tracking-wider uppercase">
              have a test
            </span>
          </Link>
        </MagneticHover>
        {/* </div> */}

        {/* Techie cartoon or illustration placeholder */}
        <div className="relative justify-end lg:w-[55%] md:w-full">
          <div
            className="magnetic absolute bottom-[-12rem] left-15 w-[15rem] h-[15rem] bg-pink-700 rounded-full opacity-45"
            data-aos="fade-left"
          />
          <div
            className="magnetic absolute top-[-3rem] left-[25%] w-[9rem] h-[9rem] rounded-full border-[45px] border-amber-500 opacity-75"
            data-aos="fade-in"
          />
          <div className="absolute top-[-5rem] right-[-14rem] bg-cover rotate-[-22deg]">
            <img
              src="/images/bulb-icon.png"
              alt=""
              className="w-[20rem] h-[20rem] opacity-30"
            />
          </div>
          <div className="absolute top-0 right-0 w-100 h-100 float-animate">
            <img
              src="/images/boy-illustration.png"
              alt=""
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
