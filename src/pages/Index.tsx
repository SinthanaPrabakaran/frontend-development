import { SmoothScroll } from "@/components/landing/SmoothScroll";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { LandingAbout } from "@/components/landing/LandingAbout";
import { Testimonies } from "@/components/landing/Testimonies";
import { LandingContact } from "@/components/landing/LandingContact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="relative bg-ink text-ivory">
      <SmoothScroll />
      <Nav />
      <Hero />
      <LandingAbout />
      <Testimonies />
      <LandingContact />
      <Footer />
    </main>
  );
};

export default Index;
