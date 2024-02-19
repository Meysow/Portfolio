// import portrait from "@/public/assets/portrait final full circle v6.png";
import portrait from "@/public/assets/test3.png";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import style from "./Hero.module.scss";

interface propTypes {
  selectedSection: number;
  sectionNumber: number;
}

const Hero: React.FC<propTypes> = ({ selectedSection, sectionNumber }) => {
  const containerStyle =
    selectedSection === sectionNumber
      ? `${style.container} ${style.active}`
      : style.container;

  return (
    <div className={containerStyle}>
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
          priority
          src={portrait}
          alt="portait"
          placeholder="blur"
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 70vw, 50vw"
        />
      </div>
      <SectionTitle title="Thibault D." fontSize={23} />
    </div>
  );
};

export default Hero;
