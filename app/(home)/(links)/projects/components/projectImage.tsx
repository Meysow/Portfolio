import Tooltip from '@/components/Tooltip';
import { projectType } from '@/datas/projectList';
import Image from 'next/image';
import styles from './projectImage.module.scss';

interface PropTypes {
  project: projectType;
}

const ProjectImage = ({ project }: PropTypes) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={project.cover}
        alt={project.demo}
        sizes='(min-width: 1200px) 465px, (min-width: 900px) 330px, 90vw'
      />
      <div className={styles.info}>
        <h3 className={styles.header}>{project.name}</h3>
        <div className={styles.links}>
          <Tooltip text='Demo'>
            <a
              className={styles.link}
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle
                  cx='11'
                  cy='11'
                  r='7'
                ></circle>
                <line
                  x1='21'
                  y1='21'
                  x2='16.65'
                  y2='16.65'
                ></line>
              </svg>
            </a>
          </Tooltip>
          <Tooltip text='Github'>
            <a
              className={styles.link}
              href={project.git}
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5'></path>
                <path d='M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5'></path>
              </svg>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
