import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { AboutSection } from "./components/AboutSection";
import { LiveMusicSection } from "./components/LiveMusicSection";
import { LocationSection } from "./components/LocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <LiveMusicSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
