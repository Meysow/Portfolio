import { Dispatch, SetStateAction } from "react";

import styles from "./ScrollDownArrow.module.scss";

interface PropTypes {
  setSelectedSection: Dispatch<SetStateAction<number>>;
}

const ScrollDownArrow = ({ setSelectedSection }: PropTypes) => {
  const handleClick = () => {
    setSelectedSection((prev) => prev + 1);
  };
  return (
    <div className={styles.link} onClick={() => handleClick()}>
      <span className={styles.linkArrow}>
        <span></span>
        <span></span>
      </span>
      <span className={styles.linkLine}></span>
      <span className={styles.linkText}>Scroll Down</span>
    </div>
  );
};

export default ScrollDownArrow;
