import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-black">
              
            </p> TECHFE is an innovative software application designed to empower entrepreneurs and MSMEs with essential digital literacy skills. It provides a user-friendly platform that facilitates learning and enhances business operations.
            <p>   .  </p>
As an entrepreneur, TECHFE can be a game-changer for your business. By leveraging the platform, you can:

Enhance your digital literacy skills to stay competitive.
Optimize business operations with the knowledge gained.
Explore innovative strategies for reaching a broader customer base.
Keep up-to-date with the latest technologies shaping the business landscape.
Ready to take your entrepreneurial journey to the next level? Start learning with TECHFE today!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
