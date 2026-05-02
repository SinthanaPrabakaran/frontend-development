import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-dawn.jpg";
import { Stars } from "./Stars";

const headline = ["The", "Word,", "illuminated", "for", "every", "season", "of", "life."];

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} id="top" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-ink grain">
      {/* Sky / parallax background */}
      <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Dawn breaking over distant mountains"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink" />
      </motion.div>

      <Stars count={120} />

      {/* Light rays */}
      <motion.div style={{ y: yMid }} className="absolute inset-0 bg-gradient-rays opacity-70 animate-pulse-glow" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold/80">A Sacred Curriculum</span>
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        <h1 className="font-serif-display text-[12vw] sm:text-[9vw] md:text-[7vw] leading-[0.95] tracking-tight text-ivory max-w-6xl text-balance">
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.9 + i * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.25em] ${w === "illuminated" ? "italic gold-text" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2.4, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-ivory/70 font-light leading-relaxed"
        >
          Bible-centered teachings crafted for children, teens, young adults, and families — one luminous library, every season of the soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.85, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#stages"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-gold text-ink text-sm tracking-wider uppercase rounded-sm shadow-gold hover:shadow-glow transition-shadow"
          >
            Begin the Journey
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#devotional"
            className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm tracking-wider uppercase text-ivory/80 hover:text-gold transition-colors"
          >
            <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-gold/40 group-hover:border-gold transition-colors">
              <span className="ml-0.5 border-y-[5px] border-y-transparent border-l-[7px] border-l-gold" />
            </span>
            Watch Intro
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[0.65rem] tracking-[0.4em] uppercase text-ivory/50">Scroll</span>
        <div className="relative h-12 w-px bg-ivory/20 overflow-hidden">
          <motion.span
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-px h-6 bg-gradient-to-b from-transparent to-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};
