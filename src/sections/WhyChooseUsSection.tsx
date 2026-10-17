import { motion } from 'framer-motion';
import { BadgeIndianRupee, Dumbbell, HandHeart, Salad, Target } from 'lucide-react';
import { Reveal, Stagger } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { images } from '../data/images';
import { fadeUp } from '../utils/motion';
import styles from './WhyChooseUsSection.module.css';

const reasons = [
  {
    icon: Dumbbell,
    title: 'Professional Trainers',
    text: 'Expert guidance on technique, programming and progression at every level.',
  },
  {
    icon: Salad,
    title: 'Nutritional Consultants',
    text: 'Nutrition support and customized diet plans that complement your training.',
  },
  {
    icon: Target,
    title: 'Personalized Fitness Plans',
    text: 'An approach tailored to your unique goals, ensuring lasting results.',
  },
  {
    icon: HandHeart,
    title: 'Supportive Community',
    text: "With us you're not alone — you're part of a community dedicated to your success.",
  },
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Price',
    text: 'Training options for every budget, from general memberships to personal coaching.',
  },
];

export function WhyChooseUsSection() {
  return (
    <>
      <section className="section section-alt" aria-labelledby="why-title">
        <div className="container">
          <SectionHeading
            id="why-title"
            eyebrow="Why Choose Dr. Fitness"
            title={
              <>
                Choose us for <span className="accent">lasting results</span>
              </>
            }
            description="Personalized fitness plans, expert guidance and consistent support — with a focus on both physical and mental well-being."
          />

          <Stagger as="ul" className={styles.grid}>
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <motion.li key={title} variants={fadeUp} className={styles.item}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.icon}>
                  <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.li>
            ))}
          </Stagger>
        </div>
      </section>

      <section className={`${styles.band} grain`} aria-labelledby="cta-title">
        <img
          className={styles.bandImage}
          src={images.ctaBand.src}
          width={images.ctaBand.width}
          height={images.ctaBand.height}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className={styles.bandShade} aria-hidden="true" />
        <Reveal className={`container ${styles.bandInner}`}>
          <h2 id="cta-title" className={styles.bandTitle}>
            Your journey to better health <span className="accent">starts today.</span>
          </h2>
          <div className={styles.bandActions}>
            <Button href="#membership" size="lg">
              View Membership Plans
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Visit Us
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
