import { motion } from 'framer-motion';
import { Children, type CSSProperties, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { stagger } from '../utils/motion';
import styles from './SnapCarousel.module.css';

const getSlides = (track: HTMLElement | null) => Array.from(track?.children ?? []) as HTMLElement[];

interface SnapCarouselProps {
  children: ReactNode;
  /** Layout class for wide screens (e.g. a CSS grid). On phones the track becomes a swipeable carousel. */
  className?: string;
  label: string;
  /** Slide width on phones, e.g. '82%'. */
  slideWidth?: string;
  /** Fixed slide height on phones, for cards that fill their box. */
  slideHeight?: string;
  gap?: number;
}

/**
 * Renders children in a regular grid on wide screens, and as a
 * scroll-snap carousel with animated pagination dots below 640px.
 */
export function SnapCarousel({ children, className, label, slideWidth = '84%', slideHeight, gap = 0.08 }: SnapCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const all = getSlides(track);
      if (!all.length || all[0].offsetWidth === 0) return;
      const start = track.scrollLeft + track.clientWidth * 0.5;
      let nearest = 0;
      let best = Infinity;
      all.forEach((slide, index) => {
        const center = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(center - start);
        if (distance < best) {
          best = distance;
          nearest = index;
        }
      });
      // Snap to the last slide when scrolled fully to the end.
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) nearest = all.length - 1;
      if (track.scrollLeft <= 4) nearest = 0;
      setActive(nearest);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = getSlides(track)[index];
    if (!track || !slide) return;
    const padding = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: slide.offsetLeft - padding, behavior: 'smooth' });
  }, []);

  const style = { '--slide-w': slideWidth, '--slide-h': slideHeight ?? 'auto' } as CSSProperties;

  return (
    <div className={styles.root} style={style} role="region" aria-roledescription="carousel" aria-label={label}>
      <motion.div
        ref={trackRef}
        className={`${styles.track} ${className ?? ''}`}
        variants={stagger(gap)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {items.map((child, index) => (
          <div
            key={index}
            className={styles.slide}
            data-active={index === active}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${items.length}`}
          >
            {child}
          </div>
        ))}
      </motion.div>

      <div className={styles.pager}>
        <span className={styles.count} aria-hidden="true">
          <span className={styles.current}>{String(active + 1).padStart(2, '0')}</span> /{' '}
          {String(items.length).padStart(2, '0')}
        </span>
        <div className={styles.dots}>
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              className={styles.dot}
              data-active={index === active}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
