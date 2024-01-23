import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, type = 'button', ...props }: ButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.button} ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
