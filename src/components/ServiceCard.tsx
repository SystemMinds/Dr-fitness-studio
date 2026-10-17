import { motion } from 'framer-motion';
import type { Service } from '../data/services';
import { fadeUp } from '../utils/motion';
import { ServiceIcon } from './ServiceIcon';
import styles from './ServiceCard.module.css';

/** Large photographic card for a facility. */
export function ServiceCard({ service }: { service: Service }) {
  const { image, size = 'regular' } = service;
  if (!image) return null;

  return (
    <motion.article className={`${styles.card} ${styles[size]}`} variants={fadeUp}>
      <img
        className={styles.image}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <span className={styles.icon}>
          <ServiceIcon name={service.icon} />
        </span>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.description}>{service.description}</p>
      </div>
    </motion.article>
  );
}

/** Compact icon tile for amenities without photography. */
export function AmenityTile({ service }: { service: Service }) {
  return (
    <motion.li className={styles.tile} variants={fadeUp}>
      <span className={styles.tileIcon}>
        <ServiceIcon name={service.icon} size={24} />
      </span>
      <div>
        <h3 className={styles.tileTitle}>{service.title}</h3>
        <p className={styles.tileText}>{service.description}</p>
      </div>
    </motion.li>
  );
}
