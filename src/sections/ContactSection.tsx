import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Navigation, Phone } from 'lucide-react';
import { useState } from 'react';
import { Reveal, Stagger } from '../components/AnimatedSection';
import { Button } from '../components/Button';
import { RatingPill } from '../components/RatingPill';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { mapLinks, siteConfig, telLink } from '../data/siteConfig';
import { fadeUp } from '../utils/motion';
import { buildWhatsAppLink, whatsappMessages } from '../utils/whatsapp';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact & Location"
          title={
            <>
              Start your journey <span className="accent">today</span>
            </>
          }
          description="Call, message us on WhatsApp, or drop by the gym in Nagarabhavi. We'll help you pick the right plan."
        />

        <div className={styles.layout}>
          <Stagger className={styles.cards}>
            <motion.a href={telLink} className={styles.card} variants={fadeUp} aria-label={`Call ${siteConfig.phone.display}`}>
              <span className={styles.icon}>
                <Phone size={22} aria-hidden="true" />
              </span>
              <span className={styles.cardBody}>
                <span className={styles.label}>Call us</span>
                <span className={styles.value}>{siteConfig.phone.display}</span>
              </span>
              <ArrowUpRight className={styles.arrow} size={20} aria-hidden="true" />
            </motion.a>

            <motion.a
              href={buildWhatsAppLink(whatsappMessages.general())}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              variants={fadeUp}
              aria-label="Message us on WhatsApp (opens in a new tab)"
            >
              <span className={`${styles.icon} ${styles.whatsapp}`}>
                <WhatsAppIcon size={22} />
              </span>
              <span className={styles.cardBody}>
                <span className={styles.label}>WhatsApp</span>
                <span className={styles.value}>Send an enquiry</span>
              </span>
              <ArrowUpRight className={styles.arrow} size={20} aria-hidden="true" />
            </motion.a>

            <motion.div className={`${styles.card} ${styles.address}`} variants={fadeUp}>
              <span className={styles.icon}>
                <MapPin size={22} aria-hidden="true" />
              </span>
              <span className={styles.cardBody}>
                <span className={styles.label}>Visit us · {siteConfig.address.short}</span>
                <address className={styles.addressText}>
                  {siteConfig.address.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <RatingPill className={styles.rating} />
              </span>
            </motion.div>

            <motion.div className={styles.actions} variants={fadeUp}>
              <Button href={mapLinks.directions} external icon={<Navigation size={18} />} iconPosition="start">
                Get Directions
              </Button>
              <WhatsAppButton message={whatsappMessages.general()} variant="outline">
                Enquire on WhatsApp
              </WhatsAppButton>
            </motion.div>
          </Stagger>

          <Reveal className={styles.mapWrap}>
            {!mapLoaded && (
              <div className={styles.mapPlaceholder} aria-hidden="true">
                <MapPin size={36} />
                <span>Loading map…</span>
              </div>
            )}
            <iframe
              className={styles.map}
              title={`Map showing ${siteConfig.name}, ${siteConfig.address.short}`}
              src={mapLinks.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
            />
            <a className={styles.mapLink} href={mapLinks.place} target="_blank" rel="noopener noreferrer">
              Open in Google Maps
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
