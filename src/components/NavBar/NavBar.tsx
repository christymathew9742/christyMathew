"use client";

import { motion } from "framer-motion";

const NavBar = (props:any) => {
  const {sections,sectionRefs,activeIndex} = props
  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(activeIndex,'activeIndex')
  return (
    <motion.div 
      className="!fixed top-6 left-[7.5%] right-[7.5%] w-full justify-center  -translate-x-1/2 flex flex-wrap  items-center space-x-2 sm:space-x-4 bg-white p-2 shadow-lg rounded-full z-50 sm:w-auto h-12"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >

      {sections.map((section: any, index: number) => (
        <motion.span
          key={index}
          onClick={() => scrollToSection(index)}
          className={`font-sans cursor-pointer text-xs font-medium text-gray-800 ${
            activeIndex === index ? "!font-extrabold !text-baseColor" : ""
          }`}
          
          animate={
            activeIndex === index
              ? { 
                  rotate: [0, .4, -.4, 0],
                  scale: [1, .9, 1],
                }
              : { 
                  rotate: 0, 
                  scale: 1 
                }
          }
          transition={{
            duration: 2,
            repeat: activeIndex === index ? 1 : 0,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {section}
        </motion.span>
      ))}

    </motion.div>

  );
};

export default NavBar;