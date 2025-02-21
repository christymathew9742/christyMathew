"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";

const faqs = [
  {
    question: "MagicTouch (4 to 8 years)",
    title: "MagicTouch (4 to 8 years)",
    answer: "Unfolding the divinity within little hearts"
  },
  {
    question: "MagicTouch (4 to 8 years)",
    title: "MagicTouch (4 to 8 years)",
    answer: "Unfolding the divinity within little hearts"
  },
  {
    question: "MagicTouch (4 to 8 years)",
    title: "MagicTouch (4 to 8 years)",
    answer: "Unfolding the divinity within little hearts"
  },
  {
    question: "MagicTouch (4 to 8 years)",
    title: "MagicTouch (4 to 8 years)",
    answer: "Unfolding the divinity within little hearts"
  },
];

const FAQItem = ({ faq, isOpen, onHover }: { faq: any; isOpen: boolean; onHover: () => void }) => (
  <motion.div
    className="p-4 cursor-pointer border-t border-baseLight relative overflow-visible"
    onMouseEnter={onHover}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-between items-center relative">
      <h3 className="text-lg font-medium text-baseColor">{faq.question}</h3>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl text-white"
      >
        <Image 
          src="/faq/cicon.png"  
          width="10"
          height="10"
          alt="cicon"  
        />
      </motion.span>
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-11 left-0 w-full p-6 h-auto z-20  bg-[url('/faq/f2.jpeg')] bg-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: -50 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white font-math font-medium text-lg mb-2">{faq.title}</h3>
          <p className="text-white text-xxs mb-4 font-normal">{faq.answer}</p>
          <button className="font-sans text-baseColor bg-white text-sm sm:text-base py-1 px-4 mr-4">
              Locate A Center
          </button>
          <button className="font-sans text-baseColor bg-white text-sm sm:text-base py-1 px-4">
              Explore Curriculum
          </button>
        </motion.div>
      )}
    </AnimatePresence>
    {isOpen && 
      <motion.div 
         className="h-[5rem]">
      </motion.div>}
  </motion.div>
);

const ChildrenActivities = ({ sectionRefs, index }: { sectionRefs: MutableRefObject<any[]>; index: number }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleHover = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <div ref={(el: any) => (sectionRefs.current[index] = el)} className="relative font-math h-auto w-full flex flex-col items-center justify-center pb-8">
      <div className="flex h-auto w-full">
        <div className="w-[50%] relative flex h-[650px]">
          <img 
            src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/08/devotional_dance.jpg?x77211&template=half-width"  
            alt="children"  
            className="h-full object-cover w-auto"  
          />
        </div>
        <div className="w-[50%] flex flex-col justify-center pt-30 h-[650px]">
          <div className="h-auto mb-8 pl-12 pr-20">
            <h2 className="text-baseColor font-math font-semibold !text-4xl mb-2">
              Children Activities
            </h2>
            <p className="text-black text-base mb-2 font-semibold">
              <span className="text-baseLight">Shrimad Rajchandra Divinetouch</span> is a global chain of value-education classes for children, founded by Pujya Gurudevshri.
            </p>
            <button className="font-sans bg-baseColor text-white text-sm sm:text-base py-1 px-4">
              Know More
            </button>
          </div>
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              faq={faq} 
              isOpen={openIndex === idx} 
              onHover={() => handleHover(idx)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChildrenActivities;