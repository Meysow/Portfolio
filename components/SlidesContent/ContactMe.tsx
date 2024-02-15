import ContactForm from "@/components/ContactForm";
import SectionTitle from "../SectionTitle";
import style from "./ContactMe.module.scss";

interface propTypes {
  selectedSection: number;
  sectionNumber: number;
}
const ContactMe: React.FC<propTypes> = ({ selectedSection, sectionNumber }) => {
  const containerStyle =
    selectedSection === sectionNumber
      ? `${style.container} ${style.active}`
      : style.container;

  return (
    <div className={containerStyle}>
      <div className={style.titleWrapper}>
        <h2 className={style.title}>
          Let&apos;s <br />
          Connect
        </h2>
        <span className={style.icon}>&gt;</span>
        <span className={style.icon}>_</span>
        <p className={style.text}>
          I&apos;m Currently looking for new opportunities.
        </p>
        <p className={style.textTwo}>
          Whether you have a question or just want to say hi,
        </p>
        <p className={style.textThree}>I&apos;ll get back to you !</p>
      </div>
      <div className={style.contact}>
        <ContactForm />
      </div>
      <SectionTitle title="Contacts." fontSize={25} />
    </div>
  );
};

export default ContactMe;
