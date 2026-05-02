import { SmoothScroll } from "@/components/landing/SmoothScroll";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ScriptureReveal } from "@/components/landing/ScriptureReveal";
import { LifeStages } from "@/components/landing/LifeStages";
import { FeaturedTeachings } from "@/components/landing/FeaturedTeachings";
import { DailyVerse } from "@/components/landing/DailyVerse";
import { Testimonies } from "@/components/landing/Testimonies";
import { Membership } from "@/components/landing/Membership";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="relative bg-ink text-ivory">
      <SmoothScroll />
      <Nav />
      <Hero />
      <ScriptureReveal />
      <LifeStages />
      <FeaturedTeachings />
      <DailyVerse />
      <Testimonies />
      <Membership />
      <Footer />
    </main>
  );
};

export default Index;
