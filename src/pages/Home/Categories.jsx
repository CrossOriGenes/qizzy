import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const categories = [
  "Science",
  "Math",
  "History",
  "Geography",
  "Literature",
  "Art",
  "Music",
  "Politics",
  "Sports",
  "Biology",
  "Physics",
  "Coding",
  "JavaScript",
  "React",
  "Python",
  "Java",
  "AI",
  "Chemistry",
  "Astronomy",
  "Astrology",
  "Cybersecurity",
  "Business",
  "Economics",
  "Grammar",
  "Trivia",
  "Movies",
  "World Wars",
  "Space",
  "GK",
  "Culture",
  "Logic",
  "Reasoning",
  "Puzzles",
  "Sociology",
  "Psychology",
  "Philosophy",
  "English",
  "Quotes",
  "Books",
  "Inventions",
  "Tech News",
  "Neural Nets",
  "WebDev",
  "Databases",
  "Cloud",
  "Ethics",
  "Politics",
  "Medical",
  "Vehicles",
  "Video-Games",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const CategoryButton = ({ label }) => {
  const handleClick = () => {
    console.log("Selected Category: ", label);
  };

  return (
    <motion.div
      variants={itemVariants}
      onClick={handleClick}
      whileHover={{
        scale: 1.06,
        rotateX: 6,
        rotateY: -6,
        color: "#FFF",
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 15,
        },
      }}
      className="group relative w-full h-12 rounded-xl border-2 border-[#62748e] overflow-hidden flex items-center justify-center text-[#62748e] cursor-pointer select-none transition-colors duration-300 bg-transparent hover:bg-[#62748E]"
    >
      <span className="text-md font-medium text-center px-2">{label}</span>
    </motion.div>
  );
};

export default function CategorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="categories" className="w-full relative p-[140px] mt-[-4rem]">
      <div className="absolute bottom-22 left-6 w-[213px] h-[210px] pointer-events-none bg-[url('/images/icon-e.png')] bg-no-repeat bg-cover bg-center opacity-45" />
      <div className="absolute top-22 right-6 w-[213px] h-[210px] pointer-events-none bg-[url('/images/icon-e.png')] bg-no-repeat bg-cover bg-center opacity-45 rotate-180" />
      <div className="relative mb-2" data-aos="fade-down">
        <h5 className="text-lg uppercase tracking-wider font-semibold text-teal-500 pb-6">
          Popular Categories
        </h5>
        <div className="absolute left-0 bottom-0 w-50 h-10 bg-[url('/images/stroke.svg')] bg-no-repeat bg-bottom-left" />
      </div>
      <h1
        className="text-6xl font-extrabold mt-3 leading-18"
        data-aos="fade-right"
      >
        Choose from the vast categories...
      </h1>

      <div className="relative pt-6 ml-[-1rem]">
        <motion.div
          ref={ref}
          className="grid grid-cols-5 gap-3 place-items-center max-w-6xl mx-auto mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {categories.slice(0, 50).map((cat, i) => (
            <CategoryButton key={i} label={cat} />
          ))}
        </motion.div>
      </div>
      <div className="mt-10 place-items-center" data-aos="fade-up">
        <div className="relative flex justify-between items-center border-2 rounded-[32px] w-xl p-1.5">
          <div className="w-full place-items-center">
            <p className="font-semibold text-md text-gray-500 me-2.5">
              Explore all <span className="text-pink-600 text-xl">50+</span>{" "}
              categories of questions
            </p>
          </div>
          <Link to={""} className="btn z-1">
            <span className="font-bold text-gray-50 text-sm tracking-wider uppercase">
              See more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
