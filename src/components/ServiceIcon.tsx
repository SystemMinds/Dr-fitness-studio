import {
  Apple,
  BadgeCheck,
  Bike,
  CircleParking,
  Dumbbell,
  Flame,
  Gauge,
  HeartPulse,
  type LucideProps,
  Move,
  PawPrint,
  Salad,
  ShowerHead,
  SquareUserRound,
  UserRound,
} from 'lucide-react';
import type { ComponentType } from 'react';
import type { ServiceIcon as IconKey } from '../data/services';

const iconMap: Record<IconKey, ComponentType<LucideProps>> = {
  heart: HeartPulse,
  dumbbell: Dumbbell,
  badge: BadgeCheck,
  move: Move,
  user: UserRound,
  flame: Flame,
  bike: Bike,
  apple: Apple,
  salad: Salad,
  gauge: Gauge,
  shower: ShowerHead,
  parking: CircleParking,
  mirror: SquareUserRound,
  paw: PawPrint,
};

export function ServiceIcon({ name, size = 22 }: { name: IconKey; size?: number }) {
  const Icon = iconMap[name];
  return <Icon size={size} strokeWidth={1.75} aria-hidden="true" />;
}
