'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const isModalOpen = modalOpen ? styles.modalOpen : styles.modalClosed;

  const pathname = usePathname();
  const isActiveLink = (linkPath: string): string => {
    return pathname === linkPath ? styles.activeLink : '';
  };

  return (
    <>
      <div className={styles.hamburger}>
        <div
          className={`${styles.btn} ${isModalOpen}`}
          onClick={() => setModalOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.modal} ${isModalOpen}`}>
        <div
          className={`${styles.btn} ${isModalOpen}`}
          onClick={() => setModalOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link
          className={`${styles.link} ${isActiveLink('/')}`}
          href='/'
          aria-label='Navigate to the home page'
          onClick={() => setModalOpen((prev) => !prev)}
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${isActiveLink('/projects')}`}
          href='/projects'
          aria-label='Navigate to the projets page'
          onClick={() => setModalOpen((prev) => !prev)}
        >
          Projects
        </Link>
        <Link
          className={`${styles.link} ${isActiveLink('/about-me')}`}
          href='/about-me'
          aria-label='Navigate to the about me page'
          onClick={() => setModalOpen((prev) => !prev)}
        >
          About Me
        </Link>
      </div>
    </>
  );
};

export default Hamburger;
