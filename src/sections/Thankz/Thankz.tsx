"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";

const Thankz = ({ sectionRefs, index }: { sectionRefs: MutableRefObject<any[]>; index: number }) => {
  const content = {
    heading: "May the Grace of Enlightened Ones uplift the world! ",
    paragraph: "(for some autograph by Bapa)",
  };

  return (
    <div ref={(el: any) => (sectionRefs.current[index] = el)} className="relative font-math h-auto w-full flex flex-col items-center justify-center pb-8 bg-black">
      <div className="flex w-full justify-center items-center pt-10">
        <div className="w-[50%] relative h-[650px]">
          <img 
            src="/thankz/thankz.png"  
            alt="children"  
            className="w-auto object-cover h-[650px]"  
          />
        </div>
        <div className="w-[50%] relative justify-center items-center">
          <motion.div
            className="w-[70%] h-auto pl-28 pt-18"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-2 font-sans">
              <h2 className="text-4xl font-normal leading-tight text-[#efede7] mb-6">
                {content.heading}
              </h2>
              <div className="ftext-sm sm:text-base leading-6 tracking-[0.5px] text-[#efede7] mt-4">
                {content.paragraph}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Thankz;