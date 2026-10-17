import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ClipboardCheck, HeartHandshake, Target, UsersRound } from 'lucide-react';
import { useRef } from 'react';
import { Reveal, Stagger } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { images } from '../data/images';
import { fadeUp, scaleIn } from '../utils/motion';
import styles from './AboutSection.module.css';

const highlights = [
  {
    icon: UsersRound,
    title: 'Professional Trainers',
    text: 'Certified trainers who guide your workouts, form and progression.',
  },
  {
    icon: Target,
    title: 'Personalized Guidance',
    text: 'Plans tailored to your goals — weight loss, muscle gain or overall health.',
  },
  {
    icon: HeartHandshake,
    title: 'Supportive Environment',
    text: 'A community focused on both physical and mental well-being.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessment & Tracking',
    text: 'Fitness assessments and body composition analysis to measure progress.',
  },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const floatY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['0px', '0px'] : ['40px', '-40px']);

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={`container ${styles.layout}`}>
        <div ref={ref} className={styles.visual}>
          <Reveal className={styles.mainImage} variants={scaleIn}>
            <img
              src={images.aboutMain.src}
              width={images.aboutMain.width}
              height={images.aboutMain.height}
              alt={images.aboutMain.alt}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <motion.div className={styles.floatImage} style={{ y: floatY }}>
            <img
              src={images.aboutSecondary.src}
              width={images.aboutSecondary.width}
              height={images.aboutSecondary.height}
              alt={images.aboutSecondary.alt}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <Reveal className={styles.stamp} delay={0.3}>
            <span className={styles.stampTop}>Break Barrier</span>
            <span className={styles.stampBottom}>Build Strength</span>
          </Reveal>
        </div>

        <div className={styles.copy}>
          <SectionHeading
            id="about-title"
            eyebrow="About Dr. Fitness"
            title={
              <>
                Your expert guide to a <span className="accent">healthier lifestyle</span>
              </>
            }
          />
          <Reveal>
            <p className={styles.lead}>
              Dr. Fitness offers fitness training, personalized coaching and nutritional guidance for every kind of
              goal. Whether you&apos;re a beginner or a seasoned athlete, we help you overcome challenges, stay
              motivated and achieve your health goals.
            </p>
          </Reveal>

          <Stagger as="ul" className={styles.highlights}>
            {highlights.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} variants={fadeUp} className={styles.highlight}>
                <span className={styles.highlightIcon}>
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.li>
            ))}
          </Stagger>

          <Reveal className={styles.cta}>
            <Button href="#facilities" variant="outline">
              Explore Facilities
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
