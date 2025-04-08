import Link from 'next/link';
import styles from './Button.module.scss';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

type AnchorButtonProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    download?: boolean;
    type?: never; // interdit "type" côté lien
  };

type RealButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    download?: undefined;
  };

type ButtonProps = AnchorButtonProps | RealButtonProps;

const Button = ({ className = '', children, href, download, ariaLabel, ...props }: ButtonProps) => {
  const fullClass = `${styles.button} ${className}`.trim();

  if (href && download) {
    return (
      <div className={styles.wrapper}>
        <a
          className={fullClass}
          href={href}
          download
          aria-label={ariaLabel}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      </div>
    );
  }

  if (href) {
    return (
      <div className={styles.wrapper}>
        <Link
          href={href}
          className={fullClass}
          aria-label={ariaLabel}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={fullClass}
        aria-label={ariaLabel}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
