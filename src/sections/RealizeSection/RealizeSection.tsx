"use client";

import { motion } from "framer-motion";
import { MutableRefObject } from "react";

const ReyalizeSection = (props: {sectionRefs: MutableRefObject<any[]>; index: number }) => {
  const {sectionRefs, index } = props;
  
  return (
    <div
      ref={(el:any) => (sectionRefs.current[index] = el)}
      className="h-[600px] w-full flex items-center justify-center -mt-2"
    >
      <motion.h1 
        className="font-sans font-bold text-4xl sm:text-6xl leading-tight text-baseColor"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Realize One's True Self
      </motion.h1>
    </div>
  );
};

export default ReyalizeSection;
