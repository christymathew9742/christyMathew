"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const VideosArticles = ({ sectionRefs, index }: { sectionRefs: MutableRefObject<any[]>; index: number }) => {

  const controls = useAnimation();
  const articles = [
    {
      title: "The art of tuning within",
      description: "Shrimad Rajchandra Mission Dharampur...",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2023/04/SRH-Banner.jpg",
    },
    {
      title: "The art of tuning within",
      description: "Shrimad Rajchandra Mission Dharampur...",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg",
    },
    {
      title: "The art of tuning within",
      description: "Shrimad Rajchandra Mission Dharampur...",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg",
    },
    {
      title: "The art of tuning within",
      description: "Shrimad Rajchandra Mission Dharampur...",
      image: "https://d3fzplfbemxxxv.cloudfront.net/wp-content/uploads/2024/01/SRMD-Ashram-Web.jpg",
    },
  ];

  const videos = [
    { title: 'Video 1', description: 'Shrimad Rajchandra Mission Dharampur', videoId: '19jLYd59MXo' },
    { title: 'Video 2', description: 'Shrimad Rajchandra Mission Dharampur', videoId: '19jLYd59MXo-KVI' },
    { title: 'Video 3', description: 'Shrimad Rajchandra Mission Dharampur', videoId: '19jLYd59MXo' },
    { title: 'Video 2', description: 'Shrimad Rajchandra Mission Dharampur', videoId: '19jLYd59MXo-KVI' },
    { title: 'Video 3', description: 'Shrimad Rajchandra Mission Dharampur', videoId: '19jLYd59MXo' }
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 4,
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
        <div className="w-full h-10 mb-20 mt-16">
          <h3 className="text-4xl text-baseColor font-bold w-full text-center">Videos</h3>
        </div>
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="news-slider px-4"
            >
              <div className="relative">
                <iframe
                  className="rounded-xl w-full !h-36 object-cover"
                  width="300"
                  height="300"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-2 font-math">
                  <h3 className="leading-tight text-base font-extralight text-baseColor">{video.description}</h3>
                </div>
            </div>
          ))}
        </Slider>
        <div className="w-full h-10 mb-20 mt-16">
          <h3 className="text-4xl text-baseColor font-bold w-full text-center">Articles</h3>
        </div>
        <Slider {...settings}>
          {articles.map((article, index) => (
            <div 
              key={index} 
              className="news-slider px-4"
            >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="rounded-xl w-full !h-36 object-cover"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mt-2 font-math w-full">
                  <h3 className="leading-tight text-base font-medium text-baseColor">{article.title}</h3>
                  <p className="leading-tight mt-1 text-xs font-extralight text-black">{article.description}</p>
                  <button className="mt-4 bg-white text-baseColor py-2 px-4 font-semibold">
                    Read More
                  </button>
                </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default VideosArticles;
