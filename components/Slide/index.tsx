import React from 'react';
import style from './Slide.module.scss';

interface SlideProps {
  selectedSection: number;
  sectionNumber: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ selectedSection, sectionNumber, children }) => {
  const isActive = selectedSection === sectionNumber;
  const position = 100 * (sectionNumber - selectedSection);

  const sectionStyle = {
    top: `${position}vh`,
  };

  const sectionClass = isActive ? `${style.sections} ${style.active}` : style.sections;

  return (
    <section
      className={sectionClass}
      style={sectionStyle}
    >
      {children}
    </section>
  );
};

export default Slide;
