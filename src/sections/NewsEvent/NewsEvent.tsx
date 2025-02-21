"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NewsEvent = ({ sectionRefs, index }: { sectionRefs: MutableRefObject<any[]>; index: number }) => {

  const controls = useAnimation();
  const events = [
    {
      title: "Jnan Pacham 2024",
      description: "",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2023/04/SRH-Banner.jpg",
    },
    {
      title: "USA Dharmayatra",
      description:
        "Pujya Gurudevshri’s USA Dharmayatra refueled a wave of devotion and joy among seekers.",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2023/01/3.-Homepg-Ashram_Amphi.png?x83243",
      date: "17-25 Nov, 2024",
    },
    {
      title: "Param Krupalu Dev’s birth anniversary at Shrimad Rajchandra Ashram Dharampur",
      description: "",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",  
    focusOnSelect: true 
  };

  return (
    <div ref={(el: any) => (sectionRefs.current[index] = el)} className="h-auto w-full flex flex-col pt-4 pb-10">
      <motion.div 
        className="font-math w-[90%] md:w-[85%] mx-auto items-center justify-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-10 mb-20">
          <h3 className="text-4xl text-baseColor font-bold w-full text-center">News & Event</h3>
        </div>
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="news-slider px-4">
              <div
                className={`news-sl bg-[url('/news/f1.jpg')] text-white rounded-2xl p-4 `}
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg w-full h-60 object-cover"
                    width={300}
                    height={300}
                  />
                  {event.date && (
                    <span className="absolute top-2 right-2 bg-white text-[#4A2B16] px-3 py-1 rounded-full text-sm font-semibold">
                      {event.date}
                    </span>
                  )}
                </div>
                <div className="mt-4 font-math">
                  <h3 className="text-base font-medium">{event.title}</h3>
                  {event.description && (
                    <p className="mt-2 text-xs font-extralight">{event.description}</p>
                  )}
                  {event.description && (
                    <button className="mt-4 bg-white text-baseColor py-2 px-4 font-semibold">
                      Read More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default NewsEvent;
