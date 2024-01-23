import ContactForm from '@/components/ContactForm';
import style from './ContactMe.module.scss';

export default function ContactMe() {
  return (
    <div className={style.container}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>
          Let&apos;s <br />
          Connect
        </h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>I&apos;m Currently looking for new opportunities.</p>
        <p className={style.textTwo}>Whether you have a question or just want to say hi,</p>
        <p className={style.textThree}>I&apos;ll get back to you !</p>
      </div>
      <div className={style.contact}>
        <ContactForm />
      </div>
    </div>
  );
}
