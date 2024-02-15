import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  download?: boolean;
}

const Button = ({
  className,
  children,
  type = "button",
  href,
  download,
  ...props
}: ButtonProps) => {
  const buttonContent = (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );

  if (href && download) {
    return (
      <div className={styles.wrapper}>
        <a className={`${styles.button} ${className}`} href={href} download>
          {children}
        </a>
      </div>
    );
  }

  if (href) {
    return (
      <div className={styles.wrapper}>
        <Link href={href} passHref>
          {buttonContent}
        </Link>
      </div>
    );
  }

  return <div className={styles.wrapper}>{buttonContent}</div>;
};

export default Button;
