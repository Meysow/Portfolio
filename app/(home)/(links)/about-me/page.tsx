import Loader from "@/components/Loader";
import SectionTitle from "@/components/SectionTitle";
import climbing from "@/public/assets/climbing.png";
import outdoor from "@/public/assets/outdoor.jpg";
import Image from "next/image";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>About Me.</h1>

          <div className={styles.aboutContainer}>
            <h2 className={styles.smallTitle}>Welcome to my portfolio!</h2>
            <p className={styles.paragraph}>
              I&apos;m an aspiring web developer, eagerly stepping into the tech
              world after a transformative career change from Market Finance.
              <br /> My journey into web development is driven by a deep-seated
              passion for technology and a keen analytical mind that thrives on
              solving complex problems.
            </p>
            <h2 className={styles.smallTitle}>Journey of Transformation</h2>

            <p className={styles.paragraph}>
              A Transitioning from the structured world of trading to the
              dynamic realm of web development, I&apos;ve carried over my
              meticulous attention to detail and commitment to excellence. These
              qualities, honed over years in a high-stakes environment, now fuel
              my coding and development projects.
              <br /> I believe that a strong foundation in one analytical field
              can be a powerful asset in another, and my background gives me a
              unique perspective on problem-solving in web development.
            </p>
            <div className={styles.flexWrapper}>
              <div>
                <h2 className={styles.smallTitle}>
                  Passion for Problem-Solving
                </h2>
                <p className={styles.paragraph}>
                  My enthusiasm for problem-solving isn&apos;t confined to the
                  digital world. As an avid climber, I spend hours solving
                  boulder problems, each climb a puzzle that challenges the mind
                  and body in equal measure. Similarly, chess captivates me with
                  its strategic depth and infinite possibilities, mirroring the
                  complexities I navigate while coding.
                  <br /> These hobbies are not just pastimes, they are
                  extensions of my analytical approach to life and work,
                  teaching me patience, strategy, and the joy of overcoming
                  challenges.
                </p>
              </div>
              <Image src={climbing} alt="climbing..." className={styles.climbingPic} />
            </div>
            <h2 className={styles.smallTitle}>Embracing the Outdoors</h2>
            <p className={styles.paragraph}>
              Beyond the screen, I find balance and inspiration in the great
              outdoors. Whether it&apos;s climbing, hiking, or engaging in any
              sport that gets my heart racing, I believe in the power of nature
              to rejuvenate and inspire.
              <br /> This passion for adventure and physical activity is a
              testament to my belief in a well-rounded lifestyle, where keeping
              physically active is as important as mental exercises. It&apos;s
              this blend of outdoor activity and indoor problem-solving that
              keeps me grounded and ready to tackle the challenges of web
              development.
            </p>
            <Image src={outdoor} alt="Outdoor picture of me." />
            <h2 className={styles.smallTitle}>
              Web Development: A New Challenge
            </h2>
            <p className={styles.paragraph}>
              As I embark on this new career path, I bring with me a toolkit of
              transferable skills: a strong sense of detail, rigorous work
              ethics, and a problem-solving mindset. I&apos;m keen to leverage
              these strengths in the world of web development, eager to
              contribute, learn, and grow within this vibrant community.
              <br /> My portfolio is a showcase of my journey so far, a mix of
              projects that reflect both my skills and my potential to grow.
              I&apos;m looking for opportunities that will challenge me, help me
              grow my skill set, and allow me to make meaningful contributions.
              Let&apos;s connect and explore how I can bring value to your team!
            </p>
            <h3 className={styles.titleContacts}>Contact Me:</h3>
            <p className={styles.contacts}>thibault.dilman@tuta.io</p>
            <p className={styles.contacts}>+33 6 45 42 25 75</p>
          </div>
        </div>
      </section>

      {/* BACGROUND TITLE */}
      <SectionTitle title="About Me." fontSize={21} vertical />
      {/* Loader */}
      <Loader />
    </div>
  );
};

export default AboutMe;
