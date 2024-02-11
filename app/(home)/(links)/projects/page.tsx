import Image from "next/image";
import styles from "./ProjectsPage.module.scss";

import background from "@/public/assets/manchotRight.png";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Projects.</h1>

          {/* TODO: probablement a virer => */}
          <div className={styles.filter}>
            React - Next - TS - JS - Node - Mongo
          </div>
          <div className={styles.projectsContainer}>
            {/* Project 1 */}
            <div className={styles.project}>
              <div className={styles.figure}>
                <Image src={background} alt="manchot" />
              </div>
              <div className={styles.description}>
                <h3 className={styles.name}>Manchot project</h3>
                <p className={styles.legend}>Brief recap</p>
                <p className={styles.stack}>React, ts, et autres...</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className={styles.project}>
              <div className={styles.figure}>
                <Image src={background} alt="manchot" />
              </div>
              <div className={styles.description}>
                <h3 className={styles.name}>Manchot project</h3>
                <p className={styles.legend}>Brief recap</p>
                <p className={styles.stack}>React, ts, et autres...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACGROUND TITLE */}
      <div>
        <h2 className={styles.backgroundTitle}>Projects.</h2>
      </div>
    </div>
  );
};

export default ProjectsPage;
