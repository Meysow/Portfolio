import styles from "./SkillDisplay.module.scss";

import Tooltip from "@/components/Tooltip";
import photoshop from "@/public/logo-SVG/adobe-photoshop-2.svg";
import git from "@/public/logo-SVG/git-icon.svg";
import mongoDB from "@/public/logo-SVG/mongodb-icon-1.svg";
import next from "@/public/logo-SVG/next-js.svg";
import node from "@/public/logo-SVG/nodejs-1.svg";
import react from "@/public/logo-SVG/react-svgrepo-com.svg";
import sass from "@/public/logo-SVG/sass-1.svg";
import tailwind from "@/public/logo-SVG/tailwind-css-2.svg";
import ts from "@/public/logo-SVG/typescript.svg";
import Image from "next/image";

const SkillDisplay = () => {
  const skills = [
    { name: "TypeScript", icon: ts },
    { name: "Next", icon: next },
    { name: "React", icon: react },
    { name: "Node", icon: node },
    { name: "MongoDB", icon: mongoDB },
    { name: "GIT", icon: git },
    { name: "Sass", icon: sass },
    { name: "Tailwind", icon: tailwind },
    { name: "Photoshop", icon: photoshop },
  ];
  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <Tooltip key={index} text={skill.name}>
          <div className={styles.skillItem}>
            <Image src={skill.icon} alt={skill.name} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default SkillDisplay;
