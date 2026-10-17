/**
 * Local image registry (files in public/images/).
 * Photography is licensed stock from Unsplash (see README → Credits) and
 * does not depict the Dr. Fitness premises. Replace with real gym photos
 * by dropping files with the same names into public/images/.
 */
export interface SiteImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const img = (file: string, width: number, height: number, alt: string): SiteImage => ({
  src: `/images/${file}`,
  width,
  height,
  alt,
});

export const images = {
  hero: img('hero.webp', 1920, 1280, 'Athlete preparing to deadlift a loaded barbell in a dark gym'),
  aboutMain: img('about-main.webp', 1000, 667, 'Man performing barbell curls in a modern gym'),
  aboutSecondary: img('about-secondary.webp', 640, 960, 'Athlete training with focus in a gym'),
  cardio: img('cardio.webp', 1100, 824, 'Gym floor with treadmills and cardio machines'),
  weights: img('weights.webp', 1100, 733, 'Rows of dumbbells on racks in a weight training area'),
  trainers: img('trainers.webp', 900, 600, 'Trainer resting between sets in a gym'),
  functional: img('functional.webp', 900, 720, 'Athlete performing a kettlebell exercise'),
  personalTraining: img('personal-training.webp', 900, 601, 'Woman performing a barbell back squat'),
  crossfit: img('crossfit.webp', 1100, 735, 'Athlete training with battle ropes'),
  nutrition: img('nutrition.webp', 900, 900, 'Protein-rich salad bowl with salmon and vegetables'),
  animalFlow: img('animal-flow.webp', 900, 600, 'Woman performing a bodyweight floor movement'),
  programBodybuilding: img('program-bodybuilding.webp', 1100, 1650, 'Muscular athlete training with dumbbells'),
  programCrossfit: img('program-crossfit.webp', 900, 600, 'Athlete performing a barbell overhead press'),
  programFunctional: img('program-functional.webp', 900, 1303, 'Man doing push-ups on a gym floor'),
  programPersonal: img('program-personal.webp', 900, 525, 'Coach supporting an athlete during a squat'),
  programZumba: img('program-zumba.webp', 900, 600, 'Group dancing in a bright studio class'),
  programSpin: img('program-spin.webp', 1100, 733, 'Stationary bikes on a gym floor'),
  programGroup: img('program-group.webp', 1100, 733, 'Group workout class in a studio'),
  dietMain: img('diet-main.webp', 1100, 749, 'Balanced meal with vegetables, eggs and avocado'),
  dietSecondary: img('diet-secondary.webp', 700, 467, 'Bowl of fresh vegetables, chickpeas and avocado'),
  dietTertiary: img('diet-tertiary.webp', 700, 467, 'Plate with grains, vegetables and fruit'),
  gymInterior: img('gym-interior.webp', 1400, 934, 'Dark modern gym interior with benches and dumbbells'),
  ctaBand: img('cta-band.webp', 1400, 934, 'Spacious gym with benches and equipment'),
} satisfies Record<string, SiteImage>;
