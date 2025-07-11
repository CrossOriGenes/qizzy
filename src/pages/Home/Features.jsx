import React, { useRef } from "react";
import gsap from "gsap";
import { motion, useInView } from "framer-motion";

function FeaturesBanner() {
  const iconRefs = useRef([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.45,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const animateListIconIn = (index) => {
    const icon = iconRefs.current[index];
    if (!icon) return;

    gsap.set(icon, { rotateY: 0 });
    const tl = gsap.timeline();
    tl.to(icon, {
      rotateY: 180,
      duration: 0.3,
      ease: "power1.in",
    }).to(icon, {
      duration: 0.6,
      ease: "back.out(2)",
    });
  };
  const animateListIconOut = (index) => {
    const icon = iconRefs.current[index];
    if (!icon) return;

    gsap.set(icon, { rotateY: 180 });
    const tl = gsap.timeline();
    tl.to(icon, {
      rotateY: 0,
      duration: 0.3,
      ease: "power1.in",
    }).to(icon, {
      duration: 0.6,
      ease: "back.out(2)",
    });
  };

  return (
    <section className="relative w-full py-[70px] px-[140px]">
      <div className="absolute inset-0 bg-[url('/images/banner-2.png')] bg-fixed bg-center z-1" />
      <div className="absolute top-0 left-0 w-full h-full bg-[#7154e6ef]" />
      <motion.div
        ref={containerRef}
        variants={variants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="relative mx-auto my-10 grid grid-cols-4 gap-1.5 z-2"
      >
        <motion.div
          variants={items}
          onMouseEnter={() => animateListIconIn(0)}
          onMouseLeave={() => animateListIconOut(0)}
          className="flex items-center justify-center px-8 text-white border-r-1 border-gray-400"
        >
          <div
            ref={(el) => (iconRefs.current[0] = el)}
            className="w-[95px] h-[85px] bg-[url('/images/certificate-icon.png')] bg-no-repeat bg-cover bg-center"
          />
          <h4 className="text-lg font-semibold text-wrap ml-2.5 leading-6 tracking-wider">
            Downloadable Certificates
          </h4>
        </motion.div>
        <motion.div
          variants={items}
          onMouseEnter={() => animateListIconIn(1)}
          onMouseLeave={() => animateListIconOut(1)}
          className="flex items-center justify-center px-8 text-white border-r-1 border-gray-400"
        >
          <div
            ref={(el) => (iconRefs.current[1] = el)}
            className="w-[89px] h-[85px] bg-[url('/images/timer-icon.png')] bg-no-repeat bg-cover bg-center"
          />
          <h4 className="text-lg font-semibold text-wrap ml-2.5 leading-6 tracking-wider">
            Timer-based Quizzes
          </h4>
        </motion.div>
        <motion.div
          variants={items}
          onMouseEnter={() => animateListIconIn(2)}
          onMouseLeave={() => animateListIconOut(2)}
          className="flex items-center justify-center px-8 text-white border-r-1 border-gray-400"
        >
          <div
            ref={(el) => (iconRefs.current[2] = el)}
            className="w-[89px] h-[85px] bg-[url('/images/AI-icon.png')] bg-no-repeat bg-cover bg-center"
          />
          <h4 className="text-lg font-semibold text-wrap ml-2.5 leading-6 tracking-wider">
            AI-generated QNAs
          </h4>
        </motion.div>
        <motion.div
          variants={items}
          onMouseEnter={() => animateListIconIn(3)}
          onMouseLeave={() => animateListIconOut(3)}
          className="flex items-center justify-center px-8 text-white"
        >
          <div
            ref={(el) => (iconRefs.current[3] = el)}
            className="w-[89px] h-[85px] bg-[url('/images/award-icon.png')] bg-no-repeat bg-cover bg-center"
          />
          <h4 className="text-lg font-semibold text-wrap ml-2.5 leading-6 tracking-wider">
            Awards on achievements
          </h4>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FeaturesBanner;
