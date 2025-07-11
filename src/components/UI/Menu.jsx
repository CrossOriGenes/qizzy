import React from "react";
import { motion } from "framer-motion";

const Menu = ({ containerClass, profileDiv, children }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={containerClass}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      {profileDiv}
      <motion.ul className="relative list-none pt-1" variants={container} initial="hidden" animate="show">
        {children}
      </motion.ul>
    </motion.div>
  );
};

export default Menu;
