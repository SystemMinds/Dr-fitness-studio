import { siteConfig } from '../data/siteConfig';
import styles from './Logo.module.css';

interface LogoProps {
  size?: 'md' | 'lg';
}

/** Official Dr. Fitness logo. */
export function Logo({ size = 'md' }: LogoProps) {
  const { src, width, height } = siteConfig.logo;
  return (
    <img
      src={src}
      alt={siteConfig.name}
      className={`${styles.logo} ${styles[size]}`}
      width={width}
      height={height}
      decoding="async"
    />
  );
}
