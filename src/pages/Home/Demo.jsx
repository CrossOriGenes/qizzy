import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";
import DemoVidEnqForm from "../../components/DemoVidEnqForm";

const CATEGORIES = [
  { color: "#00d3f2", label: "Business & Law", icon: "fa-user-graduate" },
  { color: "#ffb900", label: "Arts & Design", icon: "fa-pen-ruler" },
  { color: "#fb64b6", label: "Coding & Computer", icon: "fa-computer" },
  { color: "#00D492", label: "Geology & Environment", icon: "fa-seedling" },
  { color: "#c27aff", label: "Language & Literature", icon: "fa-language" },
  { color: "#51a2ff", label: "Media & Photography", icon: "fa-film" },
];

function Demo() {
  const iconRefs = useRef([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
      backgroundColor: CATEGORIES[index].color,
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
      backgroundColor: "#fff",
      ease: "back.out(2)",
    });
  };

  const getDemoHandler = (userData) => {
    console.log(userData);
  };

  return (
    <section className="relative w-full p-[120px] overflow-clip">
      <div className="absolute top-0 left-0 w-full h-[990px] bg-[rgba(0,0,0,0.4)] opacity-30" />
      <div className="absolute top-50 left-[-9rem] h-[900px] w-[500px] pointer-events-none bg-[url('/images/icon-group-1.png')] bg-cover bg-center float-animate" />
      <div className="absolute top-50 right-[-2rem] h-[900px] w-[600px] pointer-events-none bg-[url('/images/icon-group-2.png')] bg-cover bg-center float-animate" />
      <div className="flex flex-col text-center" data-aos="fade-up">
        <div className="relative mb-2">
          <h5 className="text-lg uppercase tracking-wider font-semibold text-teal-500 pb-6">
            Checkout the most popular topics
          </h5>
          <div className="absolute left-[43%] bottom-0 w-50 h-10 bg-[url('/images/stroke.svg')] bg-no-repeat bg-bottom" />
        </div>
        <h1 className="text-6xl font-extrabold mt-3 leading-18">
          Quiz topics that are most opted by teachers & students
        </h1>
      </div>
      <motion.div
        ref={containerRef}
        variants={variants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="mx-auto my-17 grid grid-cols-6 gap-1.5"
      >
        {CATEGORIES.map((item, i) => (
          <motion.div
            key={i}
            variants={items}
            className="flex flex-col items-center justify-center icon-lg z-1"
            onMouseEnter={() => animateListIconIn(i)}
            onMouseLeave={() => animateListIconOut(i)}
          >
            <div
              className={`w-[185px] h-[185px] border-2 rounded-full border-dashed p-5`}
              style={{ borderColor: item.color }}
            >
              <div
                ref={(el) => (iconRefs.current[i] = el)}
                className="icon w-full h-full bg-white"
              >
                <i
                  className={`fa-solid ${item.icon} text-6xl z-2`}
                  style={{ color: item.color }}
                />
              </div>
            </div>
            <Link
              to={`details/${item.label}`}
              className="mt-5 text-md font-bold text-center text-wrap w-23 hover:text-blue-500 transition duration-300"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <div className="relative mx-[3rem] my-30">
        <div className="absolute top-[-3.3rem] left-[-6.6rem] w-[250px] h-[207px] bg-[url('/images/icon-paper-clip.png')] bg-no-repeat bg-cover z-4 opacity-100 float-animate-2" />
        <div className="relative card min-h-[37rem] rounded-4xl overflow-clip">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/card-bg.png')] bg-no-repeat bg-cover bg-center opacity-100" />
          <div className="absolute bottom-[-13.5rem] right-[-5.5rem] w-[1000px] h-[400px] bg-[url('/images/icon-pencil-line.png')] bg-no-repeat bg-cover bg-center" />
          <div className="relative p-[100px] flex items-start my-auto">
            <div className="flex flex-col px-2 w-full md:w-[45%]">
              <h2 className="text-6xl font-extrabold text-white">
                Sign up for a free demo video
              </h2>
              <p className="text-lg text-gray-500 font-semibold mt-6 leading-6">
                Provide your details enquiring for a topic of your choice, to
                get a demo quiz video from us on your email absolutely free!
              </p>
            </div>
            <div
              className="relative flex flex-col pl-2.5 pe-0 w-full md:w-[60%]"
              data-aos="fade-right"
            >
              <DemoVidEnqForm onSubmit={getDemoHandler} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
