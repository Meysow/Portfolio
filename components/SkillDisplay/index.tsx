import styles from './SkillDisplay.module.scss';

import ts from '@/public/logo-SVG/typescript.svg';
import next from '@/public/logo-SVG/next-js.svg';
import sass from '@/public/logo-SVG/sass-1.svg';
import node from '@/public/logo-SVG/nodejs-1.svg';
import mongoDB from '@/public/logo-SVG/mongodb-icon-1.svg';
import git from '@/public/logo-SVG/git-icon.svg';
import tailwind from '@/public/logo-SVG/tailwind-css-2.svg';
import figma from '@/public/logo-SVG/figma-5.svg';
import photoshop from '@/public/logo-SVG/adobe-photoshop-2.svg';
import Image from 'next/image';
import Tooltip from '@/components/Tooltip';

const SkillDisplay = () => {
  const skills = [
    { name: 'Next', icon: next },
    { name: 'TypeScript', icon: ts },
    { name: 'Sass', icon: sass },
    { name: 'Node', icon: node },
    { name: 'MongoDB', icon: mongoDB },
    { name: 'GIT', icon: git },
    { name: 'Tailwind', icon: tailwind },
    { name: 'Figma', icon: figma },
    { name: 'Photoshop', icon: photoshop },
  ];
  return (
    <div className={styles.skillsGrid}>
      {skills.map((skill, index) => (
        <Tooltip
          key={index}
          text={skill.name}
        >
          <div className={styles.skillItem}>
            <Image
              priority
              src={skill.icon.src}
              alt={skill.name}
              width={120}
              height={120}
            />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default SkillDisplay;
