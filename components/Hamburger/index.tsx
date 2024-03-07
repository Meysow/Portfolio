"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Hamburger.module.scss";

const Hamburger = () => {
  const [active, setActive] = useState<boolean>(false);
  const isActive = active ? styles.active : styles.notActive;

  // TODO: animer la sortie de la modale

  return (
    <>
      <div className={styles.hamburger}>
        <div
          className={`${styles.btn} ${isActive}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.modal} ${isActive}`}>
        <div
          className={`${styles.btn} ${isActive}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link
          className={styles.link}
          href="/"
          onClick={() => setActive((prev) => !prev)}
        >
          Home
        </Link>
        <Link
          className={styles.link}
          href="/projects"
          onClick={() => setActive((prev) => !prev)}
        >
          Projects
        </Link>
        <Link
          className={styles.link}
          href="/about-me"
          onClick={() => setActive((prev) => !prev)}
        >
          About Me
        </Link>
      </div>
    </>
  );
};

export default Hamburger;
