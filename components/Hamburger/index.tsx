import { useState } from 'react';
import styles from './Hamburger.module.scss';
import Link from 'next/link';

const Hamburger = () => {
  const [active, setActive] = useState<boolean>(false);
  const isActive = active ? styles.active : styles.notActive;

  return (
    <>
      <div className={styles.hamburger}>
        <button
          className={`${styles.btn} ${isActive}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`${styles.modal} ${isActive}`}>
        <button
          className={`${styles.btn} ${isActive}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link
          className={styles.link}
          href='/'
        >
          Link 1
        </Link>
        <Link
          className={styles.link}
          href='/'
        >
          Link 1
        </Link>
        <Link
          className={styles.link}
          href='/'
        >
          Link 1
        </Link>
        <Link
          className={styles.link}
          href='/'
        >
          Link 1
        </Link>
        <Link
          className={styles.link}
          href='/'
        >
          Link 1
        </Link>
      </div>
    </>
  );
};

export default Hamburger;
