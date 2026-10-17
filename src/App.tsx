import { MotionConfig } from 'framer-motion';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { Navbar } from './components/Navbar';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { DietPlanSection } from './sections/DietPlanSection';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { HeroSection } from './sections/HeroSection';
import { Marquee } from './sections/Marquee';
import { MembershipSection } from './sections/MembershipSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ReviewsSection } from './sections/ReviewsSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <Marquee />
        <AboutSection />
        <FacilitiesSection />
        <ProgramsSection />
        <MembershipSection />
        <ReviewsSection />
        <DietPlanSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </MotionConfig>
  );
}
