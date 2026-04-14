import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ConceptSection } from "@/components/ConceptSection";
import { MenuSection } from "@/components/MenuSection";
import { EventsSection } from "@/components/EventsSection";
import { ReservationSection } from "@/components/ReservationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="page-shell">
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <MenuSection />
      <EventsSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
