import { motion } from "framer-motion";
import { PageShell } from "@/components/landing/PageShell";

const stories = [
  {
    quote: "Lumen rebuilt my devotional life from the ground up. For the first time, scripture feels like a home, not a duty.",
    name: "Marian Ellsworth",
    stage: "Adult • United Kingdom",
  },
  {
    quote: "My twelve-year-old asks to do the lessons before bed. He talks about the parables at dinner. I have no other words but: thank you.",
    name: "Daniel Okafor",
    stage: "Parent • Lagos",
  },
  {
    quote: "I came to Lumen with a thousand questions. The teachers met every one with patience and the depth of the text itself.",
    name: "Sofia Reyes",
    stage: "Young Adult • Buenos Aires",
  },
  {
    quote: "At seventy-two, I am studying the Word with more clarity than I had at thirty. Lumen feels like a quiet cathedral I can enter daily.",
    name: "Elias Wren",
    stage: "Senior • Maine",
  },
  {
    quote: "Our small group uses Lumen as our weekly study. The production is reverent — it feels holy without ever feeling stiff.",
    name: "Hannah Lindqvist",
    stage: "Group leader • Stockholm",
  },
  {
    quote: "I was skeptical that an online course could matter. Six months in, I have memorised more scripture than in twenty years of trying.",
    name: "Aaron Vesely",
    stage: "Young Adult • Prague",
  },
];

const Testimonials = () => {
  return (
    <PageShell
      eyebrow="Testimonies"
      title={<>Lives <em className="gold-text not-italic">illuminated</em>, in their own words.</>}
      intro="Stories from members across six continents and every season of life."
    >
      <section className="relative py-24 md:py-32 bg-night overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 max-w-6xl mx-auto">
            {stories.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.1 }}
                className="relative bg-ink p-10 md:p-12 flex flex-col justify-between min-h-[340px]"
              >
                <span className="absolute top-4 left-6 font-serif-display text-7xl text-gold/30">“</span>
                <blockquote className="relative font-serif-display italic text-xl md:text-2xl leading-snug text-ivory/90 mt-6 text-balance">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="h-px w-8 bg-gold" />
                  <div>
                    <div className="text-sm text-ivory">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-ivory/50 mt-1">{t.stage}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Testimonials;
