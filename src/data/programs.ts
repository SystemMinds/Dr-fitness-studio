import { images, type SiteImage } from './images';

export interface Program {
  id: string;
  title: string;
  /** Name used in the WhatsApp enquiry message. */
  enquiryName: string;
  description: string;
  tags: string[];
  image: SiteImage;
}

/** Training programs, with descriptions based on the brochure copy. */
export const programs: Program[] = [
  {
    id: 'bodybuilding',
    title: 'Bodybuilding',
    enquiryName: 'Bodybuilding training',
    description:
      'Personalized training plans, nutrition guidance and expert advice focused on strength, muscle growth and proper recovery to maximize your progress.',
    tags: ['Strength', 'Muscle growth', 'Recovery'],
    image: images.programBodybuilding,
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    enquiryName: 'CrossFit training',
    description:
      'Boost strength, endurance and flexibility while improving cardiovascular health. Expert guidance ensures proper form and injury prevention.',
    tags: ['Endurance', 'Weight loss'],
    image: images.programCrossfit,
  },
  {
    id: 'functional',
    title: 'Functional Training',
    enquiryName: 'Functional Training',
    description:
      'Improve strength, balance and coordination for everyday activities, enhancing mobility and reducing the risk of injury.',
    tags: ['Mobility', 'Balance'],
    image: images.programFunctional,
  },
  {
    id: 'personal',
    title: 'Personal Training',
    enquiryName: 'Personal Training',
    description:
      'One-on-one sessions with fitness tests, diet plans, posture correction and results tracking, tailored to your goals.',
    tags: ['1-on-1', 'Posture'],
    image: images.programPersonal,
  },
  {
    id: 'zumba',
    title: 'Zumba',
    enquiryName: 'Zumba classes',
    description:
      'Dance meets fitness in a fun, calorie-burning workout that improves cardiovascular health, coordination and flexibility. Suitable for all levels.',
    tags: ['Cardio', 'All levels'],
    image: images.programZumba,
  },
  {
    id: 'spin',
    title: 'RPM Spin Studio',
    enquiryName: 'RPM Spin Studio sessions',
    description:
      'High-intensity cycling with expert guidance that boosts endurance, burns calories and strengthens the body. For all fitness levels.',
    tags: ['High intensity', 'Endurance'],
    image: images.programSpin,
  },
  {
    id: 'group',
    title: 'Group Classes',
    enquiryName: 'Group Classes',
    description:
      'Structured workouts led by expert trainers in a supportive community. Stay motivated and achieve your goals together.',
    tags: ['Community', 'All levels'],
    image: images.programGroup,
  },
];
