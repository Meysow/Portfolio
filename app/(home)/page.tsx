'use client';

import { useState, useRef, useCallback } from 'react';
import style from './HomePage.module.scss';

import Header from '@/components/Header';
import PageSelector from '@/components/PageSelector';
import ScrollDownArrow from '@/components/ScrollDownArrow';
import Button from '@/components/Button';
import SkillDisplay from '@/components/SkillDisplay';

// IMAGE //
import portrait from '@/public/assets/portrait final full circle v6.png';
import amazona from '@/public/Amazona large.png';

// import climb from '@/public/assets/chessClimb.png';
import climb from '@/public/assets/indoor.png';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
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
        <section
          className={sectionClassNames(1)}
          style={sectionClassStyle(1)}
        >
          <div className={style.titleWrapper}>
            <h1 className={style.title}>
              Thibault
              <br /> Dilman
            </h1>
            <span className={style.icon}>&gt;</span>
            <span className={style.icon}>_</span>
            <p className={style.text}>Front End Developper.</p>
            <p className={style.textTwo}>+33 6 45 42 25 75</p>
            <p className={style.textThree}>thibault.dilman@tuta.io</p>

            <p className={style.portfolio}>Portfolio</p>
          </div>
          <div className={style.portrait}>
            <Image
              src={portrait}
              alt='portait'
              placeholder='blur'
              sizes='(max-width: 768px) 75vw, (max-width: 1200px) 70vw, 50vw'
            />
          </div>
        </section>

        <section
          className={sectionClassNames(2)}
          style={sectionClassStyle(2)}
        >
          <div className={style.titleWrapper}>
            <h2 className={style.title}>
              My
              <br /> Projects
            </h2>
            <span className={style.icon}>&gt;</span>
            <span className={style.icon}>_</span>
            <p className={style.text}>From Amazona to Unique Digital Experiences: </p>
            <p className={style.textTwo}>Discover My Projects.</p>

            <Button className={style.buttonMargin}>Learn More</Button>
          </div>
          <div className={style.illustration}>
            <Image
              src={amazona}
              alt='Illustration of Amazona Project'
              placeholder='blur'
              sizes='(max-width: 768px) 60vw, (max-width: 1200px) 55vw, 50vw'
            />
          </div>
        </section>

        <section
          className={sectionClassNames(3)}
          style={sectionClassStyle(3)}
        >
          <div className={style.titleWrapper}>
            <h2 className={style.title}>Skills</h2>
            <span className={style.icon}>&gt;</span>
            <span className={style.icon}>_</span>
            <p className={style.text}>Crafting Digital Experiences </p>
            <p className={style.textTwo}>with Expertise and Passion.</p>

            <Button className={style.buttonMargin}>Download My C.V.</Button>
          </div>
          <div className={style.skills}>
            <div className={style.skillsCard}>
              <SkillDisplay />
            </div>
          </div>
        </section>

        <section
          className={sectionClassNames(4)}
          style={sectionClassStyle(4)}
        >
          <div className={style.titleWrapper}>
            <h2 className={style.title}>
              About
              <br /> Me
            </h2>
            <span className={style.icon}>&gt;</span>
            <span className={style.icon}>_</span>
            <p className={style.text}>Balancing Adventure and Strategy:</p>
            <p className={style.textTwo}>A Passion for Climbing, Trekking, and Chess.</p>
            <Button className={style.buttonMargin}>Discover Me</Button>
          </div>
          <div className={style.illustration}>
            <Image
              src={climb}
              alt='Climbing Illustration'
              placeholder='blur'
              sizes='(max-width: 768px) 75vw, (max-width: 1200px) 70vw, 50vw'
            />
          </div>
        </section>

        <section
          className={sectionClassNames(5)}
          style={sectionClassStyle(5)}
        >
          <div className={style.titleWrapper}>
            <h2 className={style.title}>
              Let&apos;s <br />
              Connect
            </h2>
            <span className={style.icon}>&gt;</span>
            <span className={style.icon}>_</span>
            <p className={style.text}>I&apos;m Currently looking for new opportunities.</p>
            <p className={style.textTwo}>Whether you have a question or just want to say hi,</p>
            <p className={style.textThree}>I&apos;ll get back to you !</p>
          </div>
          <div className={style.contact}>
            <ContactForm />
          </div>
        </section>

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
