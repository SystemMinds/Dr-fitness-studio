import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { tapSpring } from '../utils/motion';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline' | 'ghost' | 'dark';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: 'md' | 'lg' | 'sm';
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

/** Link styled as a button, with subtle hover lift and tap feedback. */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'end',
  external = false,
  fullWidth = false,
  className,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.full : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <motion.a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={tapSpring}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && iconPosition === 'start' && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className={styles.icon}>{icon}</span>}
    </motion.a>
  );
}
