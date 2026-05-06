import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-dawn.jpg";

const headline = ["The", "Word,", "illuminated", "for", "every", "season", "of", "life."];

const ctas = [
  { to: "/quiz", label: "Standard Quiz", desc: "Find your path" },
  { to: "/courses", label: "Course Suggestions", desc: "Curated for you" },
  { to: "/course-preview", label: "Course Preview", desc: "Step inside" },
  { to: "/faq", label: "FAQ", desc: "Begin gently" },
];

// Floating shapes
const shapes = [
  { c: "bg-blush/50", size: 380, top: "10%", left: "-6%", delay: 0, dur: 18 },
  { c: "bg-lavender/40", size: 320, top: "55%", left: "82%", delay: 1, dur: 22 },
  { c: "bg-sage/40", size: 240, top: "70%", left: "8%", delay: 2, dur: 20 },
  { c: "bg-gold-soft/50", size: 200, top: "5%", left: "78%", delay: 0.5, dur: 16 },
  { c: "bg-sky/40", size: 160, top: "40%", left: "45%", delay: 1.5, dur: 24 },
];

const particles = Array.from({ length: 28 }).map((_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  dur: 6 + Math.random() * 6,
}));

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-aurora"
    >
      {/* Mist gradients */}
      <div className="absolute inset-0 bg-gradient-mist opacity-90" aria-hidden />

      {/* Hero image — very soft */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 opacity-30 mix-blend-luminosity">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink" />
      </motion.div>

      {/* Floating soft shapes */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: s.delay }}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
          className={`absolute rounded-full blur-3xl ${s.c} animate-float-slow pointer-events-none`}
        />
      ))}

      {/* Light rays */}
      <motion.div
        style={{ y: yMid }}
        className="absolute inset-0 bg-gradient-rays opacity-70 animate-pulse-glow pointer-events-none"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-gold/60 animate-float"
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              boxShadow: "0 0 10px hsl(var(--gold) / 0.6)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-gold/60" />
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-primary-deep/80">A Sacred Curriculum</span>
          <span className="h-px w-10 bg-gold/60" />
        </motion.div>

        <h1 className="font-serif-display text-[12vw] sm:text-[9vw] md:text-[7vw] leading-[0.95] tracking-tight text-ivory max-w-6xl text-balance">
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.7 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.25em] ${w === "illuminated" ? "italic gold-text" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.9, duration: 1.2 }}
          className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="mt-8 max-w-xl text-base md:text-lg text-ivory/75 font-light leading-relaxed italic font-serif-display"
        >
          Bible-centered teachings crafted for children, teens, young adults, and families — one luminous library, every season of the soul.
        </motion.p>

        {/* CTA grid — 4 routes */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl"
        >
          {ctas.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className={`group relative overflow-hidden rounded-xl px-5 py-5 text-left transition-all duration-500 backdrop-blur-md
                ${i === 0
                  ? "bg-gradient-gold text-primary-foreground shadow-gold hover:shadow-glow"
                  : "bg-card/60 border border-gold/30 text-ivory hover:border-gold hover:bg-card/80 shadow-soft"}
              `}
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-blush/30 via-transparent to-lavender/30" />
              <span className="relative block text-[0.6rem] uppercase tracking-[0.3em] opacity-70 mb-1">{c.desc}</span>
              <span className="relative block font-serif-display text-xl md:text-2xl leading-tight">
                {c.label}
              </span>
              <span className="relative mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em]">
                Enter
                <span className="h-px w-5 bg-current group-hover:w-9 transition-all duration-500" />
              </span>
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
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
