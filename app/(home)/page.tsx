'use client';

import { useState, useRef, useCallback } from 'react';
import style from './HomePage.module.scss';

import Header from '@/components/Header';
import PageSelector from '@/components/PageSelector';
import ScrollDownArrow from '@/components/ScrollDownArrow';

// IMAGE //

// import climb from '@/public/assets/chessClimb.png';
import ContactForm from '@/components/ContactForm';
import Slide from '@/components/Slide';
import Hero from '@/components/SlidesContent/Hero';
import Projects from '@/components/SlidesContent/Projects';
import Skills from '@/components/SlidesContent/Skills';
import { AboutMe } from '@/components/SlidesContent/AboutMe';
import ContactMe from '@/components/SlidesContent/ContactMe';
// import climb from '@/public/assets/archOne.png';
// import climb from '@/public/assets/archTwo.png';

const HomePage = () => {
  const [selectedSection, setSelectedSection] = useState<number>(1);

  const touchStartRef = useRef<null | number>(null);
  const touchEndRef = useRef<null | number>(null);

  const lastInteractionRef = useRef(0);

  const numberOfSections = 5;
  const delayBetweenSectionChange = 600;

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
      const currentTime = e.timeStamp;
      if (currentTime - lastInteractionRef.current < delayBetweenSectionChange) {
        return;
      }
      lastInteractionRef.current = currentTime;

      const scrollDown = e.deltaY > 0;
      changeSection(scrollDown);
    },
    [changeSection, delayBetweenSectionChange]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = e.targetTouches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
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

  // Style //

  const sectionClassNames = (sectionNumber: number) => {
    if (selectedSection === sectionNumber) {
      return `${style.sections} ${style.active}`;
    }
    return style.sections;
  };

  const sectionClassStyle = (sectionNumber: number) => {
    const position = 100 * (sectionNumber - selectedSection);
    return {
      top: `${position}vh`,
    };
  };

  return (
    <div className={style.layout}>
      <Header />
      <div
        className={style.main}
        onWheel={handleOnMouseScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Slide
          selectedSection={selectedSection}
          sectionNumber={1}
        >
          <Hero />
        </Slide>

        <Slide
          selectedSection={selectedSection}
          sectionNumber={2}
        >
          <Projects />
        </Slide>

        <Slide
          selectedSection={selectedSection}
          sectionNumber={3}
        >
          <Skills />
        </Slide>

        <Slide
          selectedSection={selectedSection}
          sectionNumber={4}
        >
          <AboutMe />
        </Slide>

        <Slide
          selectedSection={selectedSection}
          sectionNumber={5}
        >
          <ContactMe />
        </Slide>

        {/* PAGE SELECTOR */}

        <PageSelector
          numberOfSections={numberOfSections}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        {selectedSection === 1 && <ScrollDownArrow setSelectedSection={setSelectedSection} />}
      </div>
    </div>
  );
};

export default HomePage;
