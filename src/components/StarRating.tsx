import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { CSSProperties } from 'react';
import { ease, viewportOnce } from '../utils/motion';
import styles from './StarRating.module.css';

interface StarRatingProps {
  value: number;
  max?: number;
  size?: number;
}

const GAP = 2;

/** Five stars with a precise partial fill (e.g. 4.7) that sweeps in on view. */
export function StarRating({ value, max = 5, size = 18 }: StarRatingProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100));
  const stars = Array.from({ length: max });
  const rowWidth = size * max + GAP * (max - 1);
  const style = { '--row-w': `${rowWidth}px`, '--gap': `${GAP}px` } as CSSProperties;

  return (
    <span className={styles.stars} style={style} role="img" aria-label={`Rated ${value} out of ${max}`}>
      <span className={styles.row} aria-hidden="true">
        {stars.map((_, index) => (
          <Star key={index} size={size} strokeWidth={1.5} />
        ))}
      </span>
      <motion.span
        className={styles.fill}
        aria-hidden="true"
        initial={{ width: '0%' }}
        whileInView={{ width: `${percent}%` }}
        viewport={viewportOnce}
        transition={{ duration: 1.2, ease, delay: 0.2 }}
      >
        <span className={styles.row}>
          {stars.map((_, index) => (
            <Star key={index} size={size} strokeWidth={1.5} fill="currentColor" />
          ))}
        </span>
      </motion.span>
    </span>
  );
}
