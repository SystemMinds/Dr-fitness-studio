import { Stagger } from '../components/AnimatedSection';
import { SnapCarousel } from '../components/SnapCarousel';
import { SectionHeading } from '../components/SectionHeading';
import { AmenityTile, ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import styles from './FacilitiesSection.module.css';

const featured = services.filter((service) => service.image);
const amenities = services.filter((service) => !service.image);

export function FacilitiesSection() {
  return (
    <section id="facilities" className="section section-alt" aria-labelledby="facilities-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            id="facilities-title"
            eyebrow="Facilities & Amenities"
            title={
              <>
                Everything you need <span className="accent">to train hard</span>
              </>
            }
            description="From the weight floor to recovery, Dr. Fitness in Nagarabhavi is equipped for every stage of your fitness journey."
          />
        </div>

        <SnapCarousel className={styles.bento} label="Facilities" slideWidth="80%" slideHeight="400px" gap={0.07}>
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </SnapCarousel>

        <Stagger as="ul" className={styles.amenities} gap={0.06} amount={0.1}>
          {amenities.map((service) => (
            <AmenityTile key={service.id} service={service} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
