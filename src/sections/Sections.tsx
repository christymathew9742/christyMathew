"use client";

import { MutableRefObject } from "react";
import { ReayalizeSection } from "./RealizeSection";
import { Gallery } from "./Gallery";
import { Founder, Inspiration } from "./PopOverSection";
import { ContactUs } from "./ContactUs";
import { Activities } from "./Activities";
import { Centers } from "./Centers";
import { ChildrenActivities } from "./ChildrenActivities";
import { NewsEvent } from "./NewsEvent";
import { VideosArticles } from "./VideosArticles";
import { Thankz } from "./Thankz";



const Sections = ({ sections, sectionRefs,activeIndex }: { sections: string[]; sectionRefs: MutableRefObject<any[]>; activeIndex: number }) => {
  const renderSection = (section: string, index:number, activeIndex: number) => {
    switch (section) {
      case "Realize":
        return (
          <ReayalizeSection 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Gallery":
        return (
          <Gallery 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Inspiration":
        return (
          <Inspiration 
            sectionRefs={sectionRefs}
            index={index}
            activeIndex={activeIndex}
          />
        )
      case "Founder":
        return (
          <Founder 
            sectionRefs={sectionRefs}
            index={index}
            activeIndex={activeIndex}
          />
        )
      case "ContactUs":
        return (
          <ContactUs 
            sectionRefs={sectionRefs}
            index={index}
            activeIndex={activeIndex}
          />
        )
      case "Centers":
        return (
          <Centers 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Activities":
        return (
          <Activities 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Children & Activities":
        return (
          <ChildrenActivities 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "News & Event":
        return (
          <NewsEvent 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Videos & Articles":
        return (
          <VideosArticles 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      case "Donate":
        return (
          <Thankz 
            sectionRefs={sectionRefs}
            index={index}
          />
        )
      default:
        return;
    }
  };

  return (
    <>
      {sections.map((section, index) => (
        <div
          key={section + index}
          ref={(el:any) => (sectionRefs.current[index] = el)}
          className="h-auto items-center justify-center"
        >
          {renderSection(section, index, activeIndex)}
        </div>
      ))}
    </>
  );
};

export default Sections;
