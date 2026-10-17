import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { Info } from 'lucide-react';
import { useState } from 'react';
import { PricingCard } from '../components/PricingCard';
import { SnapCarousel } from '../components/SnapCarousel';
import { SectionHeading } from '../components/SectionHeading';
import { pricingCategories, type PricingCategory } from '../data/pricing';
import { ease } from '../utils/motion';
import styles from './MembershipSection.module.css';

const tabSx = {
  minHeight: 0,
  p: '6px',
  borderRadius: '999px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: '#111318',
  '& .MuiTabs-indicator': {
    height: '100%',
    borderRadius: '999px',
    background: '#FFD629',
    zIndex: 0,
  },
  '& .MuiTabs-flexContainer': { gap: '4px' },
  '& .MuiTab-root': {
    zIndex: 1,
    minHeight: 46,
    px: { xs: 2, sm: 3.5 },
    borderRadius: '999px',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 700,
    fontSize: { xs: '0.78rem', sm: '0.86rem' },
    letterSpacing: '0.06em',
    color: '#B9BDC6',
    textTransform: 'uppercase',
    transition: 'color .3s',
  },
  '& .MuiTab-root.Mui-selected': { color: '#0a0a0a' },
  '& .MuiTab-root.Mui-focusVisible': { outline: '2px solid #FFD629', outlineOffset: 2 },
} as const;

export function MembershipSection() {
  const [activeId, setActiveId] = useState<PricingCategory['id']>('general');
  const category = pricingCategories.find((item) => item.id === activeId) ?? pricingCategories[0];

  return (
    <section id="membership" className={`section section-alt ${styles.section}`} aria-labelledby="membership-title">
      <div className={styles.backdrop} aria-hidden="true" />
      <div className="container">
        <SectionHeading
          id="membership-title"
          eyebrow="Membership Plans"
          align="center"
          title={
            <>
              Invest in <span className="accent">your strength</span>
            </>
          }
          description="Transparent pricing for general training and one-on-one personal training. Enquire on WhatsApp and our team will help you get started."
        />

        <div className={styles.tabs}>
          <Tabs
            value={activeId}
            onChange={(_, value: PricingCategory['id']) => setActiveId(value)}
            aria-label="Membership categories"
            sx={tabSx}
            variant="scrollable"
            scrollButtons={false}
          >
            {pricingCategories.map((item) => (
              <Tab
                key={item.id}
                value={item.id}
                label={item.title}
                id={`tab-${item.id}`}
                aria-controls={`panel-${item.id}`}
                disableRipple
              />
            ))}
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            id={`panel-${category.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${category.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
          >
            <p className={styles.subtitle}>{category.subtitle}</p>
            <SnapCarousel className={styles.grid} label={`${category.title} plans`} slideWidth="86%" gap={0.1}>
              {category.plans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  categoryTitle={category.title}
                  featured={Boolean(plan.highlight)}
                />
              ))}
            </SnapCarousel>
            {category.disclaimer && (
              <p className={styles.disclaimer}>
                <Info size={16} aria-hidden="true" />
                {category.disclaimer}
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <p className={styles.footnote}>
          Payments are not taken online. Tap <strong>Enquire Now</strong> to message us on WhatsApp about any plan.
        </p>
      </div>
    </section>
  );
}
