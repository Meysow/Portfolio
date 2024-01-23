import style from './Hero.module.scss';
import Image from 'next/image';
import portrait from '@/public/assets/portrait final full circle v6.png';

export default function Hero() {
  return (
    <div className={style.container}>
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
          src={portrait}
          alt='portait'
          placeholder='blur'
          sizes='(max-width: 768px) 75vw, (max-width: 1200px) 70vw, 50vw'
        />
      </div>
    </div>
  );
}
