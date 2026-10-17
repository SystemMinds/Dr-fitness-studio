import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquareQuote, PenLine } from 'lucide-react';
import { Reveal } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { CountUp } from '../components/CountUp';
import { SectionHeading } from '../components/SectionHeading';
import { StarRating } from '../components/StarRating';
import { siteConfig } from '../data/siteConfig';
import { ease, viewportOnce } from '../utils/motion';
import styles from './ReviewsSection.module.css';

export function ReviewsSection() {
  const { rating, google } = siteConfig;

  return (
    <section id="reviews" className={`section ${styles.section}`} aria-labelledby="reviews-title">
      <div className={`container ${styles.layout}`}>
        <motion.div
          className={styles.scoreCard}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease }}
        >
          <div className={styles.ring} aria-hidden="true" />
          <span className={styles.quoteMark} aria-hidden="true">
            <MessageSquareQuote size={120} strokeWidth={1} />
          </span>

          <p className={styles.source}>{rating.source} Rating</p>
          <p className={styles.score} aria-label={`${rating.value} out of 5`}>
            <CountUp to={rating.value} decimals={1} />
            <span className={styles.outOf}>/5</span>
          </p>
          <StarRating value={rating.value} size={28} />
          <p className={styles.count}>
            Based on <strong><CountUp to={rating.count} />+</strong> {rating.source} reviews
          </p>
        </motion.div>

        <div className={styles.copy}>
          <SectionHeading
            id="reviews-title"
            eyebrow="Member Reviews"
            title={
              <>
                Rated highly by <span className="accent">our members</span>
              </>
            }
            description="Don't just take our word for it. See what members say about training at Dr. Fitness, Nagarbhavi, on Google."
          />

          <Reveal className={styles.actions}>
            <Button href={google.mapsUrl} external icon={<ArrowUpRight size={18} />}>
              Read Our Google Reviews
            </Button>
            <Button href={google.mapsUrl} external variant="outline" icon={<PenLine size={16} />} iconPosition="start">
              Share Your Experience
            </Button>
          </Reveal>

          <Reveal className={styles.note} delay={0.1}>
            Rating and review count from our {rating.source} Business Profile.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
