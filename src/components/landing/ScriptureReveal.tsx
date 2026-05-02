import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const verse = "Thy word is a lamp unto my feet, and a light unto my path.";
const ref_text = "Psalm 119:105";

export const ScriptureReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const chars = verse.split("");

  return (
    <section ref={ref} className="relative py-40 md:py-56 bg-ink overflow-hidden">
      {/* Expanding light orb */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1.6, 2.4]),
          opacity: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 0.7, 0.5, 0]),
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-gold/30 via-gold/5 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto max-w-5xl text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="h-px w-12 bg-gold/40" />
          <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold/70">Scripture</span>
          <span className="h-px w-12 bg-gold/40" />
        </motion.div>

        <p className="font-serif-display italic text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-ivory text-balance">
          {chars.map((c, i) => {
            const start = i / chars.length;
            const end = start + 1 / chars.length;
            return (
              <motion.span
                key={i}
                style={{
                  opacity: useTransform(scrollYProgress, [start * 0.8, end * 0.8 + 0.2], [0.08, 1]),
                  color: useTransform(
                    scrollYProgress,
                    [start * 0.8, end * 0.8 + 0.2],
                    ["hsl(40 30% 92% / 0.15)", "hsl(40 35% 94%)"]
                  ),
                }}
              >
                {c}
              </motion.span>
            );
          })}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-3"
        >
          <span className="h-px w-16 bg-gold" />
          <span className="font-serif-display text-lg md:text-xl tracking-wider gold-text">{ref_text}</span>
        </motion.div>
      </div>
    </section>
  );
};
