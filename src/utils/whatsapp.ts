import { siteConfig } from '../data/siteConfig';

/** Formats a rupee amount using Indian digit grouping, e.g. 14999 → "₹14,999". */
export const formatINR = (amount: number): string =>
  `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

/** Builds an official wa.me link with a URL-encoded, prefilled message. */
export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(message)}`;

export const whatsappMessages = {
  general: () =>
    'Hi Dr. Fitness, I would like to know more about your training and membership options. Please share details.',
  plan: (planName: string, price: number) =>
    `Hi Dr. Fitness, I am interested in the ${planName} priced at ${formatINR(price)}. Please share more details.`,
  program: (programName: string) =>
    `Hi Dr. Fitness, I am interested in ${programName}. Please share more details.`,
  dietPlan: (price: number) =>
    `Hi Dr. Fitness, I am interested in the Customized Diet Plan priced at ${formatINR(price)}. Please share more details.`,
};
