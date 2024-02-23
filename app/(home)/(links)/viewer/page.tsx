import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import styles from "./Viewer.module.scss";
import ProjectAnimated from "./component/projectAnimated";

const ViewerPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>this page:</h1>
          <div className={`${styles.container} ${styles.active}`}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>
                My
                <br /> Projects
              </h2>
              <span className={styles.icon}>&gt;</span>
              <span className={styles.icon}>_</span>
              <p className={styles.text}>
                From Amazona to Unique Digital Experiences:{" "}
              </p>
              <p className={styles.textTwo}>Discover My Projects.</p>
              {/* <p className={style.textThree}></p> */}

              <Button className={styles.buttonMargin} href="/projects">
                Learn More
              </Button>
            </div>
            {/* TODO FAST: Mettre le isActive a une valeur variable */}
            <ProjectAnimated isActive={true} />
            <SectionTitle title="Projects." fontSize={21} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewerPage;
