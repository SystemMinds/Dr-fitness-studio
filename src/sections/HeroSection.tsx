import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Dumbbell, MapPin, Star } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../components/Button';
import { images } from '../data/images';
import { dietPlan, pricingCategories } from '../data/pricing';
import { siteConfig } from '../data/siteConfig';
import { ease } from '../utils/motion';
import { formatINR } from '../utils/whatsapp';
import styles from './HeroSection.module.css';

const headline = [
  [
    { text: 'Build', accent: false },
    { text: 'Strength.', accent: true },
  ],
  [
    { text: 'Break', accent: false },
    { text: 'Barriers.', accent: true },
  ],
];

const generalFrom = Math.min(...pricingCategories[0].plans.map((plan) => plan.price));

const { rating } = siteConfig;

const quickFacts: { value: string; label: string; href?: string; star?: boolean }[] = [
  { value: formatINR(generalFrom), label: 'Memberships from' },
  {
    value: rating.value.toFixed(1),
    label: `${rating.count}+ ${rating.source} reviews`,
    href: siteConfig.google.mapsUrl,
    star: true,
  },
  { value: formatINR(dietPlan.price), label: 'Custom diet plan' },
];

const badgeText = 'Break Barrier • Build Strength • ';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '-10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, reduceMotion ? 1 : 0]);

  let wordIndex = 0;

  return (
    <section id="home" ref={ref} className={`${styles.hero} grain`} aria-labelledby="hero-title">
      <motion.div className={styles.media} style={{ y: imageY }} aria-hidden="true">
        <motion.div
          className={styles.zoom}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 2.4, ease }}
        >
          {/* Lowercase attribute: React 18 does not recognise the camelCase `fetchPriority` prop. */}
          <img
            src={images.hero.src}
            width={images.hero.width}
            height={images.hero.height}
            alt=""
            decoding="async"
            {...{ fetchpriority: 'high' }}
          />
        </motion.div>
      </motion.div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <motion.div
        className={styles.badge}
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6, rotate: -40 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease, delay: 1.1 }}
      >
        <svg viewBox="0 0 200 200" className={styles.badgeRing}>
          <defs>
            <path id="hero-badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text textLength="486" lengthAdjust="spacing">
            <textPath href="#hero-badge-circle" textLength="486" lengthAdjust="spacing">
              {badgeText}
            </textPath>
          </text>
        </svg>
        <span className={styles.badgeCore}>
          <Dumbbell size={26} strokeWidth={2} />
        </span>
      </motion.div>

      <motion.div className={`container ${styles.inner}`} style={{ opacity: contentOpacity, y: contentY }}>
        <motion.p
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
        >
          <span className={styles.pulse} aria-hidden="true" />
          <MapPin size={14} aria-hidden="true" />
          {siteConfig.address.area}
        </motion.p>

        <h1 id="hero-title" className={styles.title}>
          {headline.map((line, lineIndex) => (
            <span key={lineIndex} className={styles.line}>
              {line.map((word) => {
                const delay = 0.45 + wordIndex++ * 0.1;
                return (
                  <span key={word.text} className={styles.mask}>
                    <motion.span
                      className={`${styles.word} ${word.accent ? styles.accent : ''}`}
                      initial={{ y: '110%', rotate: 4 }}
                      animate={{ y: 0, rotate: 0 }}
                      transition={{ duration: 0.9, ease, delay }}
                    >
                      {word.text}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.span
          className={styles.rule}
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
        />

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1 }}
        >
          Your fitness journey starts here. Train smarter, build strength, and become your strongest self with
          Dr.&nbsp;Fitness.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.15 }}
        >
          <Button href="#membership" icon={<ArrowRight size={18} />} className={styles.cta}>
            <span className={styles.long}>Explore Memberships</span>
            <span className={styles.short}>View Plans</span>
          </Button>
          <Button href="#contact" variant="outline" className={styles.cta}>
            Contact Us
          </Button>
        </motion.div>

        <motion.ul
          className={styles.facts}
          aria-label="Highlights"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
        >
          {quickFacts.map((fact) => (
            <motion.li
              key={fact.label}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              {fact.href ? (
                <a
                  href={fact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.factLink}
                  aria-label={`Rated ${fact.value} out of 5 from ${fact.label} — open Google reviews (opens in a new tab)`}
                >
                  <span className={styles.factValue}>
                    {fact.value}
                    {fact.star && <Star size={15} fill="currentColor" className={styles.factStar} aria-hidden="true" />}
                  </span>
                  <span className={styles.factLabel}>{fact.label}</span>
                </a>
              ) : (
                <>
                  <span className={styles.factValue}>{fact.value}</span>
                  <span className={styles.factLabel}>{fact.label}</span>
                </>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.a
        href="#about"
        className={styles.scroll}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className={styles.scrollTrack}>
          <ArrowDown size={14} aria-hidden="true" />
        </span>
      </motion.a>
    </section>
  );
}
