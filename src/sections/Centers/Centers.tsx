"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { MutableRefObject } from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";

const Centers = ({ sectionRefs, index }: { sectionRefs: MutableRefObject<any[]>; index: number }) => {

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { count: 206, label: "Mission Centers" },
    { count: 96, label: "Mission Centers" },
    { count: 252, label: "Mission Centers" },
    { count: 206, label: "Mission Centers" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0)); // Initialize counts for each stat

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });

      const intervals = stats.map((stat, idx) => {
        let currentCount = 0;
        return setInterval(() => {
          if (currentCount < stat.count) {
            currentCount++;
            setCounts(prevCounts => {
              const newCounts = [...prevCounts];
              newCounts[idx] = currentCount;
              return newCounts;
            });
          }
        }, 20); 
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView, controls]);

  const activityDetails = [
    { location: "Ghatkopar", people: ["Heena Shaha", "Heena Shaha", "Heena Shaha", "Heena Shaha", "Heena Shaha"] },
    { location: "Andheri", people: ["John Doe", "Jane Doe", "Sam Smith", "Anna Bell", "Mike Ross"] },
    { location: "Borivali", people: ["Alice Brown", "Tom White", "Nina Black", "Steve Grey", "Lucy Green"] },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <div ref={(el: any) => (sectionRefs.current[index] = el)} className="h-auto w-full flex flex-col items-center justify-center pt-24 pb-10">
      <div className="w-full h-auto flex bg-[url('/Center/frame.jpeg')] relative p-6 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full font-math">
          {stats.map((stat, idx) => (
            <div key={idx} ref={ref} className="w-full h-auto text-center">
              <motion.h3
                className="text-white font-bold !text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.5 }}
              >
                {counts[idx]}
              </motion.h3>
              <p className="text-white font-bold text-xl">{stat.label}</p>
            </div>
          ))}
          <div className="w-full h-auto text-center">
            <p className="text-white font-medium text-xs">Want to mention 6 continents anywhere?</p>
            <Image src="/activity/map.png" alt="Map" width={500} height={600} className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="font-math w-[90%] md:w-[85%] mx-auto">
        <div className="flex w-full h-10 mb-6">
          <h3 className="text-4xl text-baseColor font-bold w-[90%]">Centers nearby you</h3>
          <button className="w-[10%] float-end font-sans bg-baseColor text-white text-sm sm:text-base py-1 px-1">View More</button>
        </div>
        <Slider {...settings} className="w-full">
          {activityDetails.map((activity, id) => (
            <div key={id} className="p-2">
              <div className="w-full bg-[url('/Center/frame.jpeg')] bg-cover bg-center relative rounded-lg p-4">
                <h3 className="text-3xl text-white mb-2">{activity.location}</h3>
                {activity.people.map((person, idx) => (
                  <div key={idx} className="flex items-center mb-1">
                    <Image src="/activity/icon1.png" alt="Icon" width={20} height={20} />
                    <span className="text-white font-medium text-xs ml-2">{person}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Centers;
