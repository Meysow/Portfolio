'use client';

import styles from './Tooltip.module.scss';
import { useRef, useState } from 'react';

interface PropTypes {
  children: React.ReactNode;
  text: string;
  key: number;
}

const Tooltip = ({ children, text }: PropTypes) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeout.current = setTimeout(() => {
      setShowTooltip(true);
    }, 26); // 0.016 seconds delay
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.tooltipWrapper}
    >
      {children}
      {showTooltip && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
