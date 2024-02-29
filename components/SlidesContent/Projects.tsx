import Button from "@/components/Button";
import AscentGear from "@/public/assets/AscentGear Full.png";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import style from "./Projects.module.scss";

interface propTypes {
  selectedSection: number;
  sectionNumber: number;
}

const Projects: React.FC<propTypes> = ({ selectedSection, sectionNumber }) => {
  const containerStyle =
    selectedSection === sectionNumber
      ? `${style.container} ${style.active}`
      : style.container;

  return (
    <div className={containerStyle}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>
          My
          <br /> Projects
        </h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>
          From AscentGear to Unique Digital Experiences:{" "}
        </p>
        <p className={style.textTwo}>Discover My Projects.</p>
        {/* <p className={style.textThree}></p> */}

        <Button className={style.buttonMargin} href="/projects">
          Learn More
        </Button>
      </div>
      <div className={style.illustration}>
        <Image
          src={AscentGear}
          alt="Illustration of AscentGear Project"
          placeholder="blur"
        />
      </div>
      <SectionTitle title="Projects." fontSize={21} />
    </div>
  );
};

export default Projects;
