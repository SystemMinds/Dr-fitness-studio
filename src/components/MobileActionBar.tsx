import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Sparkles } from 'lucide-react';
import { telLink } from '../data/siteConfig';
import { useScrolled } from '../hooks/useScrolled';
import { ease } from '../utils/motion';
import { buildWhatsAppLink, whatsappMessages } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './MobileActionBar.module.css';

/** App-style quick actions pinned to the bottom of the screen on phones. */
export function MobileActionBar() {
  const visible = useScrolled(480);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className={styles.bar}
          aria-label="Quick actions"
          initial={{ y: '130%' }}
          animate={{ y: 0 }}
          exit={{ y: '130%' }}
          transition={{ duration: 0.5, ease }}
        >
          <motion.a href={telLink} className={styles.action} whileTap={{ scale: 0.92 }}>
            <Phone size={20} aria-hidden="true" />
            <span>Call</span>
          </motion.a>
          <motion.a
            href={buildWhatsAppLink(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.action} ${styles.whatsapp}`}
            whileTap={{ scale: 0.92 }}
            aria-label="WhatsApp (opens in a new tab)"
          >
            <WhatsAppIcon size={20} />
            <span>WhatsApp</span>
          </motion.a>
          <motion.a href="#membership" className={`${styles.action} ${styles.join}`} whileTap={{ scale: 0.95 }}>
            <Sparkles size={18} aria-hidden="true" />
            <span>Join Now</span>
          </motion.a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
