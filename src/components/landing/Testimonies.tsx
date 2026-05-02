import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonies = [
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
];

export const Testimonies = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="testimonies" ref={ref} className="relative py-32 md:py-44 bg-night overflow-hidden">
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 font-serif-display text-[28rem] leading-none text-gold/[0.04] select-none pointer-events-none"
        aria-hidden
      >
        “
      </motion.div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold/80">Testimonies</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl text-ivory text-balance max-w-3xl mx-auto">
            Lives <em className="gold-text not-italic">illuminated</em>, in their own words.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40 max-w-6xl mx-auto">
          {testimonies.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-ink p-10 md:p-14"
            >
              <span className="absolute top-6 left-8 font-serif-display text-6xl text-gold/30">“</span>
              <blockquote className="relative font-serif-display italic text-2xl md:text-[1.65rem] leading-snug text-ivory/90 mt-4 text-balance">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="h-px w-8 bg-gold" />
                <div>
                  <div className="text-sm text-ivory">{t.name}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-ivory/40 mt-1">{t.stage}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
