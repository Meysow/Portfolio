import React from "react";
import style from "./Slide.module.scss";

interface SlideProps {
  selectedSection: number;
  sectionNumber: number;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({
  selectedSection,
  sectionNumber,
  children,
}) => {
  const position = 100 * (sectionNumber - selectedSection);

  const sectionStyle = {
    top: `${position}vh`,
  };

  return (
    <section className={style.sections} style={sectionStyle}>
      {children}
    </section>
  );
};

export default Slide;
