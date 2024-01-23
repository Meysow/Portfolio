import Button from '../Button';
import SkillDisplay from '@/components/SkillDisplay';
import style from './Skills.module.scss';

export default function Skills() {
  return (
    <div className={style.container}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>Skills</h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>Crafting Digital Experiences </p>
        <p className={style.textTwo}>with Expertise and Passion.</p>

        <Button className={style.buttonMargin}>Download My C.V.</Button>
      </div>
      <div className={style.skills}>
        <div className={style.skillsCard}>
          <SkillDisplay />
        </div>
      </div>
    </div>
  );
}
