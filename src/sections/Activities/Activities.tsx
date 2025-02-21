"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";


const Activities = ({ sectionRefs, index }: { sectionRefs: MutableRefObject<any[]>; index: number }) => {

  const controls = useAnimation();
 
  return (
    <div ref={(el: any) => (sectionRefs.current[index] = el)} className="relative ont-math h-auto w-full flex flex-col items-center justify-center pt-24 pb-10">
      <div className="absolute h-auto text-center !top-[5rem] !left-4 w-full justify-center">
        <h2 className="text-baseColor font-math font-semibold !text-4xl mb-2">
          Youth Activities - The 5 S Programme for Youth
        </h2>
        <p className="text-black text-base text-center mb-2 max-w-[700px] mx-auto font-normal">
          Pujya Gurudevshri harnesses the creative potential and intelligence of the younger generation, steering them towards a higher goal.
        </p>
        <button className="font-sans bg-baseColor text-white text-sm sm:text-base py-1 px-4">
          Know More
        </button>
      </div>

      <div className="flex items-end space-x-5 h-auto w-full !text-3x1 text-center">
        <div 
          className="h-auto w-full bg-[url('/activity/h1.jpeg')] bg-cover bg-center relative rounded-r-[20px] pt-4"
        >
          <h3 className="text-white font-math font-medium !text-3xl pb-2">Satsang</h3>
          <Image src="/activity/img1.png"  alt="img1"  height="500" width="500" className="!h-[26rem]"  />
        </div>
        <div 
          className="h-auto w-full bg-[url('/activity/h2.jpeg')] bg-cover bg-center relative rounded-tl-[20px] rounded-tr-[20px] pt-4"
        >
          <h3 className="text-white font-math font-medium !text-3xl pb-10">Satsang</h3>
          <Image src="/activity/img2.png"  alt="img2"  height="500" width="500" className="!h-[16rem]" />

        </div>
        <div 
          className="h-auto w-full bg-[url('/activity/h3.jpeg')] bg-cover bg-center relative rounded-tl-[20px] rounded-tr-[20px] pt-4"
        >
          <h3 className="text-white font-math font-medium !text-3xl pb-6">Satsang</h3>
          <Image src="/activity/img3.png"  alt="img3"  height="500" width="500" className="!h-[12rem]" />

        </div>
        <div 
          className="h-auto w-full bg-[url('/activity/h4.jpeg')] bg-cover bg-center relative rounded-tl-[20px] rounded-tr-[20px] pt-4"
        >
          <h3 className="text-white font-math font-medium !text-3xl pb-14">Satsang</h3>
          <Image src="/activity/img4.png"  alt="img4"  height="500" width="500" className="!h-[16rem]" />

        </div>
        <div 
          className="h-auto w-full bg-[url('/activity/h5.jpeg')] bg-cover bg-center relative rounded-tl-[20px] pt-4"
        >
          <h3 className="text-white font-math font-medium !text-3xl pb-4">Satsang</h3>
          <Image src="/activity/img5.png"  alt="img3"  height="500" width="500" className="!h-[22rem]" />

        </div>
      </div>
    </div>
  );
};

export default Activities;
