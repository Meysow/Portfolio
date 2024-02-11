import styles from "./Layout.module.scss";

const Annexelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Annexelayout;
