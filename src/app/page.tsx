"use client";

import dynamic from "next/dynamic";
const Sections = dynamic(
  () => import("@/sections/Sections"),
  { ssr: false }
);
const NavBar = dynamic(
  () => import("@/components/NavBar/NavBar"),
  { ssr: false }
);

import { useState, useEffect, useRef } from "react";
import { sections } from "@/utils/sections";
import { Hero } from "@/sections/Hero";
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Home | My Next.js App',
//   description: 'Welcome to My Next.js App, a platform for amazing content and experiences.',
//   alternates: {
//     canonical: 'https://www.example.com/',
//   },
//   openGraph: {
//     title: 'Home | My Next.js App',
//     description: 'Welcome to My Next.js App, a platform for amazing content and experiences.',
//     url: 'https://www.example.com/',
//     type: 'website',
//     images: [
//       {
//         url: 'https://www.example.com/og-image.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Og Image Alt Text',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Home | My Next.js App',
//     description: 'Welcome to My Next.js App, a platform for amazing content and experiences.',
//     images: ['https://www.example.com/twitter-image.jpg'],
//   },
// };

export default function Home() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const topOffsets = sectionRefs.current.map((ref) => ref?.offsetTop || 0);
      const scrollPosition = window.scrollY + 100;
      const currentIndex = topOffsets.findIndex((offset, i) =>
        scrollPosition >= offset && (topOffsets[i + 1] ? scrollPosition < topOffsets[i + 1] : true)
      );
      if (currentIndex !== -1) setActiveIndex(currentIndex);
      const heroSectionHeight = sectionRefs.current[0]?.offsetHeight || 0;
      const scrollProgress = (scrollPosition / heroSectionHeight) * 100;
      if (scrollProgress >= 70) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative font-sans w-full h-auto flex flex-col mx-auto md:justify-center xl:max-w-[1508px] bg-[url('/bgTheme.jpeg')] overflow-x-hidden">
      <Hero />
      {!isHeroVisible && (
          <NavBar
            sections={sections}
            sectionRefs={sectionRefs}
            activeIndex={activeIndex}
          />
      )}
      <Sections 
        sections={sections}
        sectionRefs={sectionRefs}
        activeIndex={activeIndex}
      />
    </div>
  );
}






