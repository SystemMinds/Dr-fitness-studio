import { AnimatePresence, motion } from 'framer-motion';
import { EllipsisVertical, Phone, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { navItems } from '../data/navigation';
import { siteConfig, telLink } from '../data/siteConfig';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { ease } from '../utils/motion';
import { whatsappMessages } from '../utils/whatsapp';
import { Button } from './Button';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';
import styles from './Navbar.module.css';

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1180) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        className={`${styles.header} ${scrolled || open ? styles.solid : ''}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        <nav className={`container ${styles.nav}`} aria-label="Main navigation">
          <a href="#home" className={styles.brand} onClick={close} aria-label={`${siteConfig.name} — back to top`}>
            <Logo />
          </a>

          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.link} ${active === item.id ? styles.active : ''}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className={styles.underline}
                      transition={{ duration: 0.35, ease }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button href="#membership" size="sm" className={styles.join}>
              Join Now
            </Button>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  key={open ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={styles.toggleIcon}
                >
                  {open ? <X size={24} /> : <EllipsisVertical size={24} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.mobile}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease }}
          >
            <motion.ul
              className={styles.mobileLinks}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={close}
                    className={`${styles.mobileLink} ${active === item.id ? styles.mobileActive : ''}`}
                  >
                    <span className={styles.mobileIndex}>{String(index + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className={styles.mobileFooter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.4 } }}
              exit={{ opacity: 0 }}
            >
              <Button href="#membership" onClick={close} fullWidth size="lg">
                Join Now
              </Button>
              <div className={styles.mobileContact}>
                <Button href={telLink} variant="outline" icon={<Phone size={18} />} iconPosition="start" fullWidth>
                  Call
                </Button>
                <WhatsAppButton message={whatsappMessages.general()} variant="outline" fullWidth>
                  WhatsApp
                </WhatsAppButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
