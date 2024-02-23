"use client";

import { useCallback, useRef, useState } from "react";
import style from "./HomePage.module.scss";

import PageSelector from "@/components/PageSelector";
import ScrollDownArrow from "@/components/ScrollDownArrow";

// IMAGE //

import BackgroundImage from "@/components/BackgroundImage";
import Loader from "@/components/Loader";
import Slide from "@/components/Slide";
import AboutMe from "@/components/SlidesContent/AboutMe";
import ContactMe from "@/components/SlidesContent/ContactMe";
import Hero from "@/components/SlidesContent/Hero";
import Projects from "@/components/SlidesContent/Projects";
import Skills from "@/components/SlidesContent/Skills";
import useAdjustVH from "@/hooks/useAdjustVH";

const HomePage = () => {
  const [selectedSection, setSelectedSection] = useState<number>(1);

  const touchStartRef = useRef<null | number>(null);
  const touchEndRef = useRef<null | number>(null);

  const lastInteractionRef = useRef(0);

  const numberOfSections = 5;
  const delayBetweenSectionChange = 600;

  useAdjustVH();

  const changeSection = useCallback(
    (increment: boolean) => {
      setSelectedSection((prevSection) => {
        if (increment && prevSection < numberOfSections) {
          return prevSection + 1;
        } else if (!increment && prevSection > 1) {
          return prevSection - 1;
        }
        return prevSection;
      });
    },
    [numberOfSections]
  );

  const handleOnMouseScroll = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      const currentTime = e.timeStamp;
      if (
        currentTime - lastInteractionRef.current <
        delayBetweenSectionChange
      ) {
        return;
      }
      lastInteractionRef.current = currentTime;

      const scrollDown = e.deltaY > 0;
      changeSection(scrollDown);
    },
    [changeSection, delayBetweenSectionChange]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      touchStartRef.current = e.targetTouches[0].clientY;
    },
    []
  );

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    touchEndRef.current = e.targetTouches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const currentTime = new Date().getTime();
    if (
      currentTime - lastInteractionRef.current < delayBetweenSectionChange ||
      touchStartRef.current === null ||
      touchEndRef.current === null
    ) {
      return;
    }
    lastInteractionRef.current = currentTime;

    const swipeDistance = touchStartRef.current - touchEndRef.current;
    const isSwipeUp = swipeDistance > 50;
    const isSwipeDown = swipeDistance < -50;

    if (isSwipeUp) {
      changeSection(true); // increment the section
    } else if (isSwipeDown) {
      changeSection(false); // decrement the section
    }
    // Reset touch references after handling the swipe
    touchStartRef.current = null;
    touchEndRef.current = null;
  }, [changeSection, delayBetweenSectionChange]);

  return (
    <div
      className={style.layout}
      onWheel={handleOnMouseScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={style.main}>
        <Slide selectedSection={selectedSection} sectionNumber={1}>
          <Hero selectedSection={selectedSection} sectionNumber={1} />
        </Slide>

        <Slide selectedSection={selectedSection} sectionNumber={2}>
          <Projects selectedSection={selectedSection} sectionNumber={2} />
        </Slide>

        <Slide selectedSection={selectedSection} sectionNumber={3}>
          <Skills selectedSection={selectedSection} sectionNumber={3} />
        </Slide>

        <Slide selectedSection={selectedSection} sectionNumber={4}>
          <AboutMe selectedSection={selectedSection} sectionNumber={4} />
        </Slide>

        <Slide selectedSection={selectedSection} sectionNumber={5}>
          <ContactMe selectedSection={selectedSection} sectionNumber={5} />
        </Slide>

        {/* PAGE SELECTOR */}

        <PageSelector
          numberOfSections={numberOfSections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        {selectedSection === 1 && (
          <ScrollDownArrow setSelectedSection={setSelectedSection} />
        )}

        {/* BA2CKGROUND */}
        <BackgroundImage />

        {/* Loader */}
        <Loader />
      </div>
    </div>
  );
};

export default HomePage;
