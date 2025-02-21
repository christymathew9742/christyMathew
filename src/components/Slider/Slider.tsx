"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings} className="w-full">
        <div className="w-screen">
          <div 
            className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url("home/gif/gifn1.gif")',
            }}
          >
          </div>
        </div>
        <div className="w-screen">
          <div 
            className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url("home/gif/gifn2.gif")',
            }}
          >
          </div>
        </div>
        <div className="w-screen">
          <div 
            className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url("home/gif/gifn3.gif")',
            }}
          >
          </div>
        </div>
        <div className="w-screen">
          <div 
            className="h-screen flex items-center justify-center bg-gray-100 bg-cover bg-no-repeat"
            style={{
              backgroundImage: 'url("home/gif/gifn4.gif")',
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
