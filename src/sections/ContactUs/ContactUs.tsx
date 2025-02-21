"use client";

import React, { useState } from 'react';
import { MutableRefObject } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 1, label: 'About Asramam', image: 'url(https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2022/03/1.-Homepg-Ashram_map.jpg?x83243)' },
  { id: 2, label: 'Plane Your Visit', image: 'url(https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg)' },
  { id: 3, label: 'Sri Dharmapuram Tirth', image: 'url(https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2022/03/2.-Homepg-Ashram_JM.jpg?x83243)' },
];

const ContactUs = (props: { sectionRefs: MutableRefObject<any[]>; index: number, activeIndex:number}) => {
  const [activeTab, setActiveTab] = useState(0);
  const { sectionRefs, index, activeIndex } = props;

  return (
    <div 
      className="relative w-full h-auto flex items-center justify-center bg-cover bg-no-repeat"
      key={index}
      ref={(el:any) => (sectionRefs.current[index] = el)}
    >
      <AnimatePresence>
        {activeTab !== null && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(to left, rgba(12,15,13), rgba(252,252,252,0%)), ${tabs[activeTab].image}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10 h-full flex py-20 !mt-12 mw-[100%] w-[85%] m-auto">
        <div className="w-[50%] h-ful"></div>
        <div className="w-[50%] h-full text-end">
          <div className="relative z-10 bg-opacity-80 w-full">
            <h2 className='text-4xl font-semibold font-math leading-tight text-white'>International Headquarters- Shrimad Rajchandra Ashram, Dharampur</h2>
          </div>
          <div className="relative z-10 bg-opacity-80 w-full mt-16 text-end">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className="p-4 cursor-pointer overflow-hidden text-2xl font-medium font-math text-white border-t border-b border-white"
                onMouseEnter={() => setActiveTab(index)}
              >
                <motion.div
                  animate={{ x: activeTab === index ? 15 : 115  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <span>{tab.label}</span>
                  <button className="ml-2 font-sans bg-baseColor text-white text-sm sm:text-base py-1 px-2">
                    View More
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;



