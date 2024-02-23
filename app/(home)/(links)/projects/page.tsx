import styles from "./ProjectsPage.module.scss";

import Button from "@/components/Button";
import Loader from "@/components/Loader";
import SectionTitle from "@/components/SectionTitle";
import { projectList } from "@/datas/projectList";
import ProjectImage from "./components/projectImage";

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Projects.</h1>

          <div className={styles.projectsContainer}>
            {/* Project 1 */}

            {projectList.map((project) => (
              <div className={styles.project} key={project.id}>
                <div className={styles.figure}>
                  <ProjectImage project={project} />
                </div>
                <div className={styles.description}>
                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.legend}>{project.blabla}</p>
                  <div className={styles.stack}>
                    <ul className={styles.tags}>
                      {project.tags.map((tag, index) => (
                        <li className={styles.tags} key={index}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* Project 3 */}
          </div>
          <div className={styles.buttonWrapper}>
            <Button href="/ThibaultDilmanResume.pdf">Download My CV</Button>
          </div>
        </div>
      </section>

      {/* BACGROUND TITLE */}
      <SectionTitle title="Projects." fontSize={24} vertical />
      {/* Loader */}
      <Loader />
    </div>
  );
};

export default ProjectsPage;
