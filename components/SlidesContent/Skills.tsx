import Button from "@/components/Button";
import SkillDisplay from "@/components/SkillDisplay";
import SectionTitle from "../SectionTitle";
import style from "./Skills.module.scss";

interface propTypes {
  selectedSection: number;
  sectionNumber: number;
}

const Skills: React.FC<propTypes> = ({ selectedSection, sectionNumber }) => {
  const containerStyle =
    selectedSection === sectionNumber
      ? `${style.container} ${style.active}`
      : style.container;

  return (
    <div className={containerStyle}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Skills</h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>Crafting Digital Experiences </p>
        <p className={style.textTwo}>with Expertise and Passion.</p>

        <Button
          className={style.buttonMargin}
          href="/ThibaultDilmanResume.pdf"
          download
        >
          Download My C.V.
        </Button>
      </div>
      <div className={style.skills}>
        <div className={style.skillsCard}>
          <SkillDisplay />
        </div>
      </div>
      <SectionTitle title="Skills." fontSize={25} />
    </div>
  );
};

export default Skills;
