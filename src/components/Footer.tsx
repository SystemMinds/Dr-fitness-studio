import { MapPin, Phone } from 'lucide-react';
import { navItems } from '../data/navigation';
import { programs } from '../data/programs';
import { mapLinks, siteConfig, telLink } from '../data/siteConfig';
import { buildWhatsAppLink, whatsappMessages } from '../utils/whatsapp';
import { Logo } from './Logo';
import { RatingPill } from './RatingPill';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Logo size="lg" />
          </div>
          <p className={styles.tagline}>{siteConfig.tagline}.</p>
          <p className={styles.about}>
            Premium fitness center in {siteConfig.address.area}, offering training, personal coaching and
            customized diet plans.
          </p>
          <RatingPill className={styles.rating} />
        </div>

        <nav aria-label="Footer quick links">
          <h2 className={styles.heading}>Quick Links</h2>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Training programs">
          <h2 className={styles.heading}>Training</h2>
          <ul className={styles.list}>
            {programs.map((program) => (
              <li key={program.id}>
                <a href="#training">{program.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Get in Touch</h2>
          <ul className={styles.contact}>
            <li>
              <a href={telLink}>
                <Phone size={18} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </li>
            <li>
              <a href={buildWhatsAppLink(whatsappMessages.general())} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={mapLinks.directions} target="_blank" rel="noopener noreferrer">
                <MapPin size={18} aria-hidden="true" />
                {siteConfig.address.short}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className={styles.credit}>Photography for illustration purposes only.</p>
      </div>
    </footer>
  );
}
