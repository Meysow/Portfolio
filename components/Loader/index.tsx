import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div
        className={styles.stripe}
        style={{ "--delay": "0.1s" } as React.CSSProperties}
      ></div>
      <div
        className={styles.stripe}
        style={{ "--delay": "0.12s" } as React.CSSProperties}
      ></div>
      <div
        className={styles.stripe}
        style={{ "--delay": "0.15s" } as React.CSSProperties}
      ></div>
      <div
        className={styles.stripe}
        style={{ "--delay": "0.19s" } as React.CSSProperties}
      ></div>
      <div
        className={styles.stripe}
        style={{ "--delay": "0.24s" } as React.CSSProperties}
      ></div>
      <div
        className={styles.stripe}
        style={{ "--delay": "0.30s" } as React.CSSProperties}
      ></div>
    </div>
  );
};

export default Loader;
