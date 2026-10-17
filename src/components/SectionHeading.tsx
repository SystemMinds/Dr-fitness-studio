import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ease, viewportOnce } from '../utils/motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', id }: SectionHeadingProps) {
  return (
    <motion.header
      className={`${styles.heading} ${align === 'center' ? styles.center : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      <motion.p
        className={styles.eyebrow}
        variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}
      >
        <span className={styles.line} aria-hidden="true" />
        {eyebrow}
      </motion.p>
      <div className={styles.titleMask}>
        <motion.h2
          id={id}
          className={styles.title}
          variants={{ hidden: { y: '100%' }, visible: { y: 0, transition: { duration: 0.75, ease } } }}
        >
          {title}
        </motion.h2>
      </div>
      {description && (
        <motion.p
          className={styles.description}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
