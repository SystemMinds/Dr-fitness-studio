import { images, type SiteImage } from './images';

/** Icon keys are resolved to icon components in the UI layer. */
export type ServiceIcon =
  | 'heart'
  | 'dumbbell'
  | 'badge'
  | 'move'
  | 'user'
  | 'flame'
  | 'bike'
  | 'apple'
  | 'salad'
  | 'gauge'
  | 'shower'
  | 'parking'
  | 'mirror'
  | 'paw';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  image?: SiteImage;
  /** Grid footprint for image cards on wide screens. */
  size?: 'large' | 'wide' | 'tall' | 'regular';
}

/** Facilities & amenities listed in the brochure. */
export const services: Service[] = [
  {
    id: 'weights',
    title: 'Weight Training Area',
    description: 'A dedicated floor of free weights, racks and machines for serious strength work.',
    icon: 'dumbbell',
    image: images.weights,
    size: 'large',
  },
  {
    id: 'cardio',
    title: 'Cardio Workout',
    description: 'Cardio equipment to build endurance and support heart health.',
    icon: 'heart',
    image: images.cardio,
    size: 'tall',
  },
  {
    id: 'crossfit',
    title: 'CrossFit / Athlete Training',
    description: 'Strength, endurance and flexibility with expert guidance on form.',
    icon: 'flame',
    image: images.crossfit,
    size: 'regular',
  },
  {
    id: 'functional',
    title: 'Functional Training',
    description: 'Improve strength, balance and coordination for everyday movement.',
    icon: 'move',
    image: images.functional,
    size: 'regular',
  },
  {
    id: 'personal',
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your goals and fitness level.',
    icon: 'user',
    image: images.personalTraining,
    size: 'wide',
  },
  {
    id: 'trainers',
    title: 'Certified Trainers',
    description: 'Professional trainers to guide your workouts and keep you on track.',
    icon: 'badge',
    image: images.trainers,
    size: 'wide',
  },
  {
    id: 'nutrition',
    title: 'Nutritional Support',
    description: 'Guidance from nutritional consultants to complement your training.',
    icon: 'apple',
    image: images.nutrition,
    size: 'wide',
  },
  {
    id: 'animal-flow',
    title: 'Animal Flow',
    description: 'Ground-based bodyweight movement for mobility, strength and control.',
    icon: 'paw',
    image: images.animalFlow,
    size: 'wide',
  },
  {
    id: 'spin',
    title: 'RPM Spin Studio',
    description: 'High-intensity indoor cycling sessions.',
    icon: 'bike',
  },
  {
    id: 'diet',
    title: 'Customized Diet Plans',
    description: 'Meal guidance designed around your goal.',
    icon: 'salad',
  },
  {
    id: 'assessment',
    title: 'Fitness Assessment',
    description: 'Including 360° body composition analysis.',
    icon: 'gauge',
  },
  {
    id: 'amenities',
    title: 'Shower, Steam & Lockers',
    description: 'Freshen up and store your belongings.',
    icon: 'shower',
  },
  {
    id: 'posing',
    title: 'Posing Room',
    description: 'Space to practise and refine your posing.',
    icon: 'mirror',
  },
  {
    id: 'parking',
    title: 'Parking',
    description: 'Parking available for members.',
    icon: 'parking',
  },
];

/** Short labels for the marquee strip. */
export const serviceTicker = [
  'Weight Training',
  'Personal Training',
  'CrossFit',
  'Functional Training',
  'RPM Spin Studio',
  'Zumba',
  'Animal Flow',
  'Diet Plans',
  'Body Composition Analysis',
];
