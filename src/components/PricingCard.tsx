import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { perMonth, type PricingPlan } from '../data/pricing';
import { fadeUp } from '../utils/motion';
import { formatINR, whatsappMessages } from '../utils/whatsapp';
import { WhatsAppButton } from './WhatsAppButton';
import styles from './PricingCard.module.css';

interface PricingCardProps {
  plan: PricingPlan;
  categoryTitle: string;
  featured?: boolean;
}

export function PricingCard({ plan, categoryTitle, featured = false }: PricingCardProps) {
  const showPerMonth = plan.durationMonths > 1;

  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      aria-label={`${categoryTitle} — ${plan.label}`}
    >
      {plan.highlight && <span className={styles.badge}>{plan.highlight}</span>}

      <header className={styles.header}>
        <p className={styles.category}>{categoryTitle}</p>
        <h3 className={styles.label}>{plan.label}</h3>
      </header>

      <div className={styles.priceRow}>
        <span className={styles.price}>{formatINR(plan.price)}</span>
        <span className={styles.period}>/ {plan.period}</span>
      </div>
      {showPerMonth ? (
        <p className={styles.perMonth}>Works out to ≈ {formatINR(perMonth(plan))} per month</p>
      ) : (
        <p className={styles.perMonth}>Billed monthly</p>
      )}

      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <li key={feature}>
            <span className={styles.check} aria-hidden="true">
              <Check size={14} strokeWidth={3} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {plan.note && <p className={styles.note}>{plan.note}</p>}

      <div className={styles.cta}>
        <WhatsAppButton
          message={whatsappMessages.plan(plan.enquiryName, plan.price)}
          variant={featured ? 'primary' : 'outline'}
          fullWidth
          ariaLabel={`Enquire about the ${plan.enquiryName} on WhatsApp (opens in a new tab)`}
        >
          Enquire Now
        </WhatsAppButton>
      </div>
    </motion.article>
  );
}
