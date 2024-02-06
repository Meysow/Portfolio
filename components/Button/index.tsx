import Link from "next/link";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

const Button = ({
  className,
  children,
  type = "button",
  href,
  ...props
}: ButtonProps) => {
  const buttonContent = (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );

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
