"use client";

import style from "./HomePage.module.scss";

// IMAGE //

import BackgroundImage from "@/components/BackgroundImage";
import Loader from "@/components/Loader";
import PageSelector from "@/components/PageSelector";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import Slide from "@/components/Slide";
import AboutMe from "@/components/SlidesContent/AboutMe";
import ContactMe from "@/components/SlidesContent/ContactMe";
import Hero from "@/components/SlidesContent/Hero";
import Projects from "@/components/SlidesContent/Projects";
import Skills from "@/components/SlidesContent/Skills";
import useAdjustVH from "@/hooks/useAdjustVH";
import useSectionSwitcher from "@/hooks/useSectionSwitcher";

const HomePage = () => {
  const { selectedSection, sectionRef, setSelectedSection } =
    useSectionSwitcher({ numberOfSections: 5, delayBetweenSectionChange: 650 });

  useAdjustVH();

  return (
    <div className={style.layout} ref={sectionRef}>
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
          numberOfSections={5}
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
