import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { StarRating } from './StarRating';
import styles from './RatingPill.module.css';

/** Compact Google rating link, used in the hero and contact area. */
export function RatingPill({ className }: { className?: string }) {
  const { rating, google } = siteConfig;
  return (
    <a
      href={google.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.pill} ${className ?? ''}`}
      aria-label={`Rated ${rating.value} out of 5 from ${rating.count} ${rating.source} reviews — read reviews on Google Maps (opens in a new tab)`}
    >
      <span className={styles.score}>{rating.value.toFixed(1)}</span>
      <StarRating value={rating.value} size={14} />
      <span className={styles.meta}>
        {rating.count}+ {rating.source} reviews
      </span>
      <ArrowUpRight size={14} className={styles.arrow} aria-hidden="true" />
    </a>
  );
}
