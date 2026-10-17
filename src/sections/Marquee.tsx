import { serviceTicker } from '../data/services';
import styles from './Marquee.module.css';

/** Continuously scrolling strip of service names (pure CSS animation). */
export function Marquee() {
  const items = [...serviceTicker, ...serviceTicker];
  return (
    <div className={styles.wrap}>
      <div className={styles.marquee} aria-label="Services offered">
        <ul className={styles.track}>
          {items.map((item, index) => (
            <li key={`${item}-${index}`} aria-hidden={index >= serviceTicker.length ? true : undefined}>
              <span>{item}</span>
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
