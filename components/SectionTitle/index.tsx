import { Playfair_Display } from 'next/font/google';
import styles from './SectionTitle.module.scss';

const ArvoFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['900'],
});

interface propTypes {
  title: string;
  fontSize: number;
  vertical?: boolean;
}

const SectionTitle = ({ title, fontSize, vertical }: propTypes) => {
  const className = vertical ? styles.backgroundTitleVertical : styles.backgroundTitle;
  return (
    <span
      className={`${className} ${ArvoFont.className}`}
      style={{ fontSize: `${fontSize}vmin` }}
    >
      {title}
    </span>
  );
};

export default SectionTitle;
