import { motion } from 'framer-motion';
import type { Program } from '../data/programs';
import { fadeUp } from '../utils/motion';
import { whatsappMessages } from '../utils/whatsapp';
import { WhatsAppButton } from './WhatsAppButton';
import styles from './ProgramCard.module.css';

interface ProgramCardProps {
  program: Program;
  index: number;
  /** Image-filled hero variant used for the lead program. */
  featured?: boolean;
  className?: string;
}

export function ProgramCard({ program, index, featured = false, className }: ProgramCardProps) {
  const { image } = program;
  return (
    <motion.article className={[styles.card, featured ? styles.feature : '', className ?? ''].join(' ')} variants={fadeUp}>
      <div className={styles.media}>
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className={styles.body}>
        <ul className={styles.tags} aria-label="Focus areas">
          {program.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h3 className={styles.title}>{program.title}</h3>
        <p className={styles.description}>{program.description}</p>
        <div className={styles.cta}>
          <WhatsAppButton
            message={whatsappMessages.program(program.enquiryName)}
            variant="ghost"
            ariaLabel={`Enquire about ${program.title} on WhatsApp (opens in a new tab)`}
          >
            Enquire
          </WhatsAppButton>
        </div>
      </div>
    </motion.article>
  );
}
