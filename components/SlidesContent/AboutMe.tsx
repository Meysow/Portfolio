import Button from '@/components/Button';
import style from './AboutMe.module.scss';
import Image from 'next/image';
import climb from '@/public/assets/indoor.png';

export function AboutMe() {
  return (
    <div className={style.container}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>
          About
          <br /> Me
        </h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>Balancing Adventure and Strategy:</p>
        <p className={style.textTwo}>A Passion for Climbing, Trekking, and Chess.</p>
        <Button className={style.buttonMargin}>Discover Me</Button>
      </div>
      <div className={style.illustration}>
        <Image
          src={climb}
          alt='Climbing Illustration'
          placeholder='blur'
          sizes='(max-width: 768px) 75vw, (max-width: 1200px) 70vw, 50vw'
        />
      </div>
    </div>
  );
}
