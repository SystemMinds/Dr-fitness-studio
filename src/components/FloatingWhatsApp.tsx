import Tooltip from '@mui/material/Tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrolled } from '../hooks/useScrolled';
import { buildWhatsAppLink, whatsappMessages } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';
import styles from './FloatingWhatsApp.module.css';

/** Persistent WhatsApp shortcut that appears after the hero. */
export function FloatingWhatsApp() {
  const visible = useScrolled(520);

  return (
    <AnimatePresence>
      {visible && (
        <Tooltip title="Chat with us on WhatsApp" placement="left" arrow>
          <motion.a
            className={styles.fab}
            href={buildWhatsAppLink(whatsappMessages.general())}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Dr. Fitness on WhatsApp (opens in a new tab)"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          >
            <WhatsAppIcon size={28} />
          </motion.a>
        </Tooltip>
      )}
    </AnimatePresence>
  );
}
