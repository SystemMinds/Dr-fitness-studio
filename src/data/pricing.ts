/** Membership pricing exactly as printed in the Dr. Fitness brochure. */

export interface PricingPlan {
  id: string;
  /** Short label shown on the card. */
  label: string;
  /** Full package name used in the WhatsApp enquiry. */
  enquiryName: string;
  price: number;
  /** Billing period shown beside the price. */
  period: string;
  durationMonths: number;
  features: string[];
  highlight?: string;
  note?: string;
}

export interface PricingCategory {
  id: 'general' | 'personal';
  title: string;
  subtitle: string;
  disclaimer?: string;
  plans: PricingPlan[];
}

export const pricingCategories: PricingCategory[] = [
  {
    id: 'general',
    title: 'General Training',
    subtitle: 'Train at your own pace with access to our gym facilities.',
    disclaimer: '*GST excluded on General Training prices.',
    plans: [
      {
        id: 'general-3m',
        label: '3 Months',
        enquiryName: '3-month general training membership',
        price: 6499,
        period: '3 months',
        durationMonths: 3,
        features: ['General training membership', 'Access to gym facilities'],
      },
      {
        id: 'general-6m',
        label: '6 Months',
        enquiryName: '6-month general training membership',
        price: 8999,
        period: '6 months',
        durationMonths: 6,
        features: ['General training membership', 'Access to gym facilities'],
      },
      {
        id: 'general-12m',
        label: '12 Months',
        enquiryName: '12-month general training membership',
        price: 14999,
        period: '12 months',
        durationMonths: 12,
        features: ['General training membership', 'Access to gym facilities'],
        highlight: 'Lowest monthly cost',
      },
    ],
  },
  {
    id: 'personal',
    title: 'Personal Training',
    subtitle: 'One-on-one coaching with a dedicated trainer, built around your goals.',
    plans: [
      {
        id: 'personal-advanced',
        label: 'Advanced',
        enquiryName: 'Advanced personal training package (monthly)',
        price: 14999,
        period: 'month',
        durationMonths: 1,
        features: [
          '24 sessions',
          '+4 sessions free',
          'Fitness test',
          'Diet plan & chart',
          'Posture correction',
          'Fitness results tracking',
        ],
        highlight: 'Advanced package',
      },
      {
        id: 'personal-3m',
        label: '3 Months',
        enquiryName: '3-month personal training package',
        price: 34999,
        period: '3 months',
        durationMonths: 3,
        features: ['3 months of personal training'],
        note: 'Contact us for full package inclusions.',
      },
      {
        id: 'personal-6m',
        label: '6 Months',
        enquiryName: '6-month personal training package',
        price: 49999,
        period: '6 months',
        durationMonths: 6,
        features: ['6 months of personal training'],
        note: 'Contact us for full package inclusions.',
      },
    ],
  },
];

export const dietPlan = {
  name: 'Customized Diet Plan',
  price: 999,
  unit: 'per person',
  goals: ['Weight loss', 'Muscle gain', 'Overall health'],
  points: [
    'Proper nutrition tailored to your goals',
    'Personalized meal suggestions',
    'Expert guidance to help you stay on track',
  ],
};

/** Approximate per-month cost, derived purely from the brochure price. */
export const perMonth = (plan: PricingPlan): number => Math.round(plan.price / plan.durationMonths);
