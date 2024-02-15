import Button from "@/components/Button";
import climb from "@/public/assets/indoor.png";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import style from "./AboutMe.module.scss";

interface propTypes {
  selectedSection: number;
  sectionNumber: number;
}

const AboutMe: React.FC<propTypes> = ({ selectedSection, sectionNumber }) => {
  const containerStyle =
    selectedSection === sectionNumber
      ? `${style.container} ${style.active}`
      : style.container;

  return (
    <div className={containerStyle}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>About Me</h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>Balancing Adventure and Strategy:</p>
        <p className={style.textTwo}>
          A Passion for Climbing, Trekking, and Chess.
        </p>
        <Button className={style.buttonMargin} href="/about-me">
          Discover Me
        </Button>
      </div>
      <div className={style.illustration}>
        <Image
          src={climb}
          alt="Climbing Illustration"
          placeholder="blur"
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 70vw, 50vw"
        />
      </div>
      <SectionTitle title="About Me." fontSize={27} />
    </div>
  );
};

export default AboutMe;
