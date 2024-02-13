import Button from "@/components/Button";
import amazona from "@/public/assets/Amazona large.png";
import Image from "next/image";
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
          From Amazona to Unique Digital Experiences:{" "}
        </p>
        <p className={style.textTwo}>Discover My Projects.</p>
        {/* <p className={style.textThree}></p> */}

        <Button className={style.buttonMargin} href="/projects">
          Learn More
        </Button>
      </div>
      <div className={style.illustration}>
        <Image
          src={amazona}
          alt="Illustration of Amazona Project"
          placeholder="blur"
          sizes="(max-width: 600px) 50vw,(max-width: 900px) 45vw, (max-width: 1200px) 40vw, 37vw"
        />
      </div>
    </div>
  );
};

export default Projects;
