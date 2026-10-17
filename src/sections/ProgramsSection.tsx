import { ProgramCard } from '../components/ProgramCard';
import { SectionHeading } from '../components/SectionHeading';
import { SnapCarousel } from '../components/SnapCarousel';
import { programs } from '../data/programs';
import styles from './ProgramsSection.module.css';

export function ProgramsSection() {
  return (
    <section id="training" className="section" aria-labelledby="training-title">
      <div className="container">
        <SectionHeading
          id="training-title"
          eyebrow="Training Programs"
          title={
            <>
              Find the training <span className="accent">that moves you</span>
            </>
          }
          description="Strength, conditioning, cardio or community — choose the program that fits your goals. Every program is guided by our expert trainers."
        />

        <SnapCarousel className={styles.grid} label="Training programs" slideWidth="82%" slideHeight="460px">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={index}
              featured={index === 0}
              className={index === 0 ? styles.lead : index >= 5 ? styles.wide : undefined}
            />
          ))}
        </SnapCarousel>
      </div>
    </section>
  );
}
