import { motion, type Variants } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';
import { fadeUp, stagger, viewportOnce } from '../utils/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'li' | 'article' | 'ul';
}

/** Reveals its content once as it scrolls into view. */
export function Reveal({ children, className, variants = fadeUp, delay = 0, as = 'div' }: RevealProps) {
  const Component = motion[as] as ElementType;
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Component>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: 'div' | 'ul';
  amount?: number;
}

/** Parent that staggers children using the `fadeUp`-style variants they declare. */
export function Stagger({ children, className, gap = 0.08, as = 'div', amount = 0.15 }: StaggerProps) {
  const Component = motion[as] as ElementType;
  return (
    <Component
      className={className}
      variants={stagger(gap)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Component>
  );
}
