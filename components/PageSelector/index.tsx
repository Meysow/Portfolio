import { Dispatch, SetStateAction, memo } from "react";
import styles from "./PageSelector.module.scss";

interface PropTypes {
  numberOfSections: number;
  selectedSection: number;
  setSelectedSection: Dispatch<SetStateAction<number>>;
}

const PageSelector = ({
  numberOfSections,
  selectedSection,
  setSelectedSection,
}: PropTypes) => {
  const handleSectionChange = (sectionClicked: number) => {
    setSelectedSection(sectionClicked);
  };

  const isActive = (sectionNumber: number) => {
    return `${styles.button} ${
      sectionNumber === selectedSection ? styles.active : ""
    }`;
  };

  const getChangeButtons = () => {
    return Array.from({ length: numberOfSections }, (_, i) => (
      <button
        className={isActive(i + 1)}
        onClick={() => handleSectionChange(i + 1)}
        key={i}
      />
    ));
  };

  return <div className={styles.container}>{getChangeButtons()}</div>;
};

export default memo(PageSelector);
