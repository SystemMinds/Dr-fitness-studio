import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  decimals?: number;
  duration?: number;
}

/** Number that counts up from zero the first time it scrolls into view. */
export function CountUp({ to, decimals = 0, duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const format = (n: number) => n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduceMotion) {
      node.textContent = format(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = format(latest);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to, decimals, duration, reduceMotion]);

  // Final value is rendered up front so it is correct without JS and for screen readers.
  return <span ref={ref}>{format(to)}</span>;
}
