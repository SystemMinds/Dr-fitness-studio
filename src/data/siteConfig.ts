import { asset } from '../utils/asset';

/**
 * Central business information for Dr. Fitness.
 * Source of truth: the printed Dr. Fitness brochure.
 * Kept free of UI concerns so it can be shared with a future React Native app.
 */
export const siteConfig = {
  name: 'Dr. Fitness',
  tagline: 'Break Barrier, Build Strength',
  /** Official logo (transparent PNG supplied by Dr. Fitness, used unmodified). */
  // `?v=` busts browser caches when the file changes (v2: C2PA metadata removed).
  logo: { src: asset('images/logo.png?v=2'), width: 1254, height: 1254 },

  phone: {
    display: '+91 76767 87977',
    tel: '+917676787977',
    whatsapp: '917676787977',
  },

  address: {
    full: '174/175, 2nd Cross, behind Deepa Complex, Papareddipalya, Nagarbhavi, Bengaluru, Karnataka 560072',
    lines: ['174/175, 2nd Cross, behind Deepa Complex', 'Papareddipalya, Nagarbhavi', 'Bengaluru, Karnataka 560072'],
    short: 'Deepa Complex, Nagarabhavi',
    area: 'Nagarabhavi, Bengaluru',
  },

  /** Official Google Business Profile listing. */
  google: {
    placeName: 'Dr Fitness - Premium Gym in Deepa complex nagarbhavi Best gym',
    mapsUrl: 'https://maps.app.goo.gl/6w1WgTb245FSpEyK7',
  },

  /**
   * Google rating shown across the site. This is a static site, so these
   * numbers do not update automatically — refresh them from the Google
   * Business Profile whenever they change.
   */
  rating: {
    value: 4.7,
    count: 168,
    source: 'Google',
  },
} as const;

const mapsQuery = encodeURIComponent(`${siteConfig.google.placeName}, ${siteConfig.address.full}`);

export const mapLinks = {
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  /** Opens the official Google Maps listing (reviews, photos, hours). */
  place: siteConfig.google.mapsUrl,
  embed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
};

export const telLink = `tel:${siteConfig.phone.tel}`;
