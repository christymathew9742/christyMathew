"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";

const imageData = [
  {
    src: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-12-1024x731.jpg?x77211",
    title: "Holistic Wellness",
  },
  {
    src: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211",
    title: "Holistic Wellness",
  },
  {
    src: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2022/12/Pujya-Gurudevshri-Rakeshji-27-683x1024.jpg?x77211",
    title: "Holistic Wellness",
  },
  {
    src: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-10-1024x731.jpg?x77211",
    title: "Holistic Wellness",
  },
  {
    src: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2022/11/Pujya-Gurudevshri-Rakeshji-28-4-1024x683.jpg?x77211",
    title: "Holistic Wellness",
  },
];

const Gallery = (props: { sectionRefs: MutableRefObject<any[]>; index: number }) => {
  const { sectionRefs, index } = props;

  return (
    <motion.div
      className="h-auto mw-[100%] w-[85%] m-auto pb-20"
      ref={(el: any) => (sectionRefs.current[index] = el)}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4">
        {imageData.slice(0, 2).map((item, idx) => (
          <ImageCard key={idx} src={item.src} title={item.title} />
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-3 gap-4 mt-4">
        {imageData.slice(2).map((item, idx) => (
          <ImageCard key={idx} src={item.src} title={item.title} />
        ))}
      </div>


      <div className="grid sm:hidden grid-cols-1 sm:gap-4">
        {imageData.slice(0, 1).map((item:any, idx:number) => (
          <ImageCard 
            key={idx} 
            src={item.src} 
            title={item.title} 
          />
        ))}
      </div>
      <div className="grid sm:hidden grid-cols-2 sm:gap-4">
      <div className="grid sm:hidden grid-cols-2 sm:gap-2">
        <div className="sm:hidden  sm:gap-2">
            <img 
              src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211" 
            />
            <img 
              src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211"
            />
          </div>
          <div className="grid sm:hidden  sm:gap-2">
            <img 
              src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211"
            />
          </div>
        </div>
      

        {/* {imageData.slice(0, 3).map((item:any, idx:number) => (
          
          // <ImageCard 
          //   key={idx} 
          //   src={item.src} 
          //   title={item.title} 
          // />
        ))} */}
      </div>
      {/* <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 ...">
        <img 
              src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211"
            />
        </div>
        <div className="col-span-2 row-span-2 ...">
        <img 
              src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211"
            />
        </div>
        <div className="row-span-3 h-20">
        <img 
              src="https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2019/10/Pujya-Gurudevshri-Rakeshji-8-1024x735.jpg?x77211"
            />
        </div>
      </div> */}
      
      
    </motion.div>
  );
};

const ImageCard = ({ src, title }: { src: string; title: string }) => (
  <div className="h-auto !rounded-lg overflow-hidden relative">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="font-slick px-4 py-1 bg-white font-semibold text-baseColor rounded-[20px] shadow-lg absolute top-4 left-4 z-40"
    >
      {title}
    </motion.button>
    <motion.img
      className="rounded-lg h-[275px] w-full object-cover"
      src={src}
      alt={title}
      whileHover={{ scale: 1.2, x: "5%", y: "5%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ transformOrigin: "center" }}
    />
  </div>
);

export default Gallery;
