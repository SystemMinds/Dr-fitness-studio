import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Reveal, Stagger } from '../components/AnimatedSection';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { images } from '../data/images';
import { dietPlan } from '../data/pricing';
import { fadeUp, scaleIn } from '../utils/motion';
import { formatINR, whatsappMessages } from '../utils/whatsapp';
import styles from './DietPlanSection.module.css';

export function DietPlanSection() {
  return (
    <section id="diet" className={`section ${styles.section}`} aria-labelledby="diet-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <SectionHeading
            id="diet-title"
            eyebrow="Customized Diet Plans"
            title={
              <>
                Fuel your body. <span className="accent">Reach your goals.</span>
              </>
            }
            description="Personalized diet guidance designed around your fitness goals, whether you want to lose weight, gain muscle, or improve your overall nutrition."
          />

          <Stagger as="ul" className={styles.goals}>
            {dietPlan.goals.map((goal) => (
              <motion.li key={goal} variants={fadeUp}>
                {goal}
              </motion.li>
            ))}
          </Stagger>

          <Stagger as="ul" className={styles.points}>
            {dietPlan.points.map((point) => (
              <motion.li key={point} variants={fadeUp}>
                <span className={styles.check} aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
                {point}
              </motion.li>
            ))}
          </Stagger>

          <Reveal className={styles.priceCard}>
            <div>
              <p className={styles.priceLabel}>{dietPlan.name}</p>
              <p className={styles.price}>
                {formatINR(dietPlan.price)}
                <span> {dietPlan.unit}</span>
              </p>
            </div>
            <WhatsAppButton message={whatsappMessages.dietPlan(dietPlan.price)}>Enquire About Diet Plans</WhatsAppButton>
          </Reveal>
        </div>

        <div className={styles.gallery}>
          <Reveal className={styles.main} variants={scaleIn}>
            <img
              src={images.dietMain.src}
              width={images.dietMain.width}
              height={images.dietMain.height}
              alt={images.dietMain.alt}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className={styles.small} delay={0.15}>
            <img
              src={images.dietSecondary.src}
              width={images.dietSecondary.width}
              height={images.dietSecondary.height}
              alt={images.dietSecondary.alt}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal className={styles.small} delay={0.25}>
            <img
              src={images.dietTertiary.src}
              width={images.dietTertiary.width}
              height={images.dietTertiary.height}
              alt={images.dietTertiary.alt}
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
