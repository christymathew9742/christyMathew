"use client";

import { MutableRefObject } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const Founder = (props: { sectionRefs: MutableRefObject<any[]>; index: number, activeIndex:number}) => {
  const { sectionRefs, index, activeIndex } = props;
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.5], ['-100%', '0%']);
  return (
    <>
      <motion.div
        key={index}
        ref={(el:any) => (sectionRefs.current[index] = el)}
        className="h-screen flex items-center justify-cente bg-cover bg-no-repeat mt-2"
        style={{
          backgroundImage: 'url("https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/12/youth-home-banner.jpg?template=bleed-banner")',
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full flex justify-center">
          <motion.div 
            className={`flex mw-[100%] w-[85%] m-auto ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0], 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="w-[30%] h-auto rounded-lg shadow-lg bg-[url('/popup/popup1.jpeg')] p-4"
              initial={{ x: index % 2 === 0 ? "-100%" : "100%", y: index % 2 === 0 ? "70%" : "-70%", opacity: 0 }}
              animate={activeIndex === index ? { x: 0, y: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className={`${index % 2 === 0 && "text-end"} space-y-2`}>
                <h2 className="font-sans text-4xl font-normal leading-tight text-[#efede7]">
                  A Journey Within
                </h2>
                <div className="font-sans text-sm sm:text-base leading-6 tracking-[0.5px] text-[#efede7] mt-4">
                  Pujya Gurudevshri has revitalised the path to self-realisation. Each spiritual activity taps into a deeper
                  dimension, allowing you to bloom into a fuller existence.
                </div>
                <button className="font-sans bg-white text-sm sm:text-base py-1 px-2 !mt-8">Discover more</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Founder;
