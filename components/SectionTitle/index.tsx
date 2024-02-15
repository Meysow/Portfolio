import { Abril_Fatface } from "next/font/google";
import styles from "./SectionTitle.module.scss";

const AbrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

interface propTypes {
  title: string;
  fontSize: number;
}

const SectionTitle = ({ title, fontSize }: propTypes) => {
  return (
    <h4
      className={`${styles.backgroundTitle} ${AbrilFatface.className}`}
      style={{ fontSize: `${fontSize}vmin` }}
    >
      {title}
    </h4>
  );
};

export default SectionTitle;
