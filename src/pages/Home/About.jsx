import React, { useRef } from "react";
import gsap from "gsap";

const FEATURES = [
  { color: "#ef5c72", label: "Prompt Result Analysis" },
  { color: "#7054e6", label: "Enhanced AI-based Q/A generations" },
  { color: "#f89321", label: "High-end UI interactions" },
  { color: "#00c7c4", label: "Open-source ease of accessibility" },
];

function About() {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const iconRefs = useRef([]);

  const animateIn = (ref) => {
    gsap.fromTo(
      ref.current,
      {
        y: "-100%",
        duration: 0.7,
        ease: "power2.in",
      },
      {
        y: "100%",
        duration: 0.8,
        ease: "power2.out",
      }
    );
  };
  const animateListIconIn = (index) => {
    const icon = iconRefs.current[index];
    if (!icon) return;

    gsap.set(icon, { rotation: 0 });
    const tl = gsap.timeline();
    tl.to(icon, {
      scale: 0,
      rotation: 360,
      duration: 0.15,
      ease: "power1.in",
    }).to(icon, {
      scale: 1,
      duration: 0.2,
      ease: "back.out(2)",
    });
  };
  const animateListIconOut = (index) => {
    const icon = iconRefs.current[index];
    if (!icon) return;

    gsap.set(icon, { rotation: 360 });
    const tl = gsap.timeline();
    tl.to(icon, {
      scale: 0,
      rotation: 0,
      duration: 0.15,
      ease: "power1.in",
    }).to(icon, {
      scale: 1,
      duration: 0.2,
      ease: "back.out(2)",
    });
  };

  return (
    <section id="about" className="w-full min-h-screen relative overflow-clip">
      <div className="w-full h-full p-[140px] flex">
        <div
          className="relative flex h-[550px] lg:w-[50%] md:w-full"
          data-aos="fade-in"
        >
          <div className="absolute bottom-[-9rem] left-[-9.5rem] w-[423px] h-[450px] pointer-events-none bg-[url('/images/paper-plane-flow.svg')] bg-no-repeat bg-cover bg-center z-1 opacity-55" />
          <div className="absolute bottom-0 right-25 w-[200px] h-[300px] pointer-events-none bg-[url('/images/path-2.svg')] bg-no-repeat bg-cover bg-center z-1 opacity-80 rotate-[-15deg]" />
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/images/pattern-2.png')] bg-no-repeat bg-center bg-cover rounded-[35px]" />
          <div className="relative w-full h-full">
            <div
              className="absolute top-[-1rem] right-25 w-[260px] h-[320px] bg-[url('/images/card-img-1.png')] bg-no-repeat bg-center bg-cover rounded-3xl z-3 shadow-md overflow-hidden"
              onMouseEnter={() => animateIn(imgRef)}
              data-aos="fade-in"
            >
              <div
                ref={imgRef}
                className="absolute top-0 left-0 h-full w-full bg-white opacity-15 pointer-events-none backdrop-blur-[10px]"
              />
            </div>
            <div
              className="absolute top-3 left-[-3rem] w-[340px] h-[500px] bg-[url('/images/card-img-3.png')] bg-no-repeat bg-center bg-cover rounded-3xl z-2 rotate-[-22deg] overflow-hidden"
              onMouseEnter={() => animateIn(imgRef2)}
              data-aos="fade-up-right"
            >
              <div
                ref={imgRef2}
                className="absolute top-0 left-0 h-full w-full bg-white opacity-15 pointer-events-none backdrop-blur-[10px]"
              />
            </div>
            <div className="absolute bottom-[-60px] right-10 w-[320px] h-[110px] z-3 shadow-2xl shadow-gray-700 pointer-events-none bg-[url('/images/banner.png')] bg-no-repeat bg-cover bg-center rounded-[4px] float-animate">
              <div className="relative flex justify-center items-center p-4 text-white">
                <strong className="text-7xl mx-2 text-outline">50+</strong>
                <span className="text-xl px-2 text-center wrap-break-word font-bold">
                  Categorized Quiz questions
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-[50%] md:w-full" data-aos="fade-left">
          <div className="flex flex-col px-4 ml-8">
            <div className="relative mb-2">
              <h5 className="text-lg uppercase tracking-wider font-semibold text-teal-500 pb-6">
                Get to know us
              </h5>
              <div className="absolute left-0 bottom-0 w-50 h-10 bg-[url('/images/stroke.svg')] bg-no-repeat bg-bottom-left" />
            </div>
            <h1 className="text-6xl font-extrabold mt-3 leading-18">
              Grow your IQ, learn with us from anywhere!
            </h1>
            <p className="text-slate-500 mt-11 text-lg font-semibold">
              May it come to self-analyzing tests or a classroom test Qizzy is
              the outmost solutions to considerably a widespread students &
              instructors. Access the finely-tuned AI generated question-bank as
              level-based to create your own mocks from any point of the world
              just at your fingertips!
            </p>
            <ul className="grid grid-cols-2 list-none mt-6">
              {FEATURES.map((list, i) => (
                <li
                  key={i}
                  className="inline-flex items-center justify-start w-full py-2 cursor-default"
                  onMouseEnter={() => animateListIconIn(i)}
                  onMouseLeave={() => animateListIconOut(i)}
                >
                  <div
                    ref={(el) => (iconRefs.current[i] = el)}
                    className="icon"
                    style={{ backgroundColor: list.color }}
                  >
                    <i className="fa fa-check text-lg font-bold text-white" />
                  </div>
                  <span className="font-bold text-start text-md leading-5 ml-2.5">
                    {list.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
