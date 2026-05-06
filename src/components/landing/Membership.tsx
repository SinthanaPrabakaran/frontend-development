import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Seeker",
    price: "Free",
    cadence: "forever",
    description: "Begin your journey with daily verse and a curated selection of teachings.",
    features: ["Daily devotional", "3 foundational lessons", "Community readings"],
    featured: false,
    cta: "Begin Freely",
  },
  {
    name: "Disciple",
    price: "$12",
    cadence: "per month",
    description: "Full library access across every life stage with study companions.",
    features: ["Full course library", "Study guides & journals", "Live monthly teachings", "Offline downloads"],
    featured: true,
    cta: "Begin Discipleship",
  },
  {
    name: "Household",
    price: "$24",
    cadence: "per month",
    description: "For families journeying together — every age, one shared library.",
    features: ["Up to 6 members", "Children's curriculum", "Family devotional plans", "Mentor access"],
    featured: false,
    cta: "Begin Together",
  },
];

export const Membership = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="membership" className="relative py-32 md:py-44 bg-ink overflow-hidden grain">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold/80">Membership</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl text-ivory leading-[1.05] text-balance">
            Three doorways. <em className="gold-text not-italic">One sacred library.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-32">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`relative p-8 md:p-10 flex flex-col ${
                p.featured
                  ? "bg-gradient-to-b from-night to-ink border border-gold/40 shadow-glow"
                  : "bg-night/60 border border-border"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-gold text-primary-foreground text-[0.6rem] uppercase tracking-[0.35em]">
                  Most Chosen
                </span>
              )}
              <div className="text-[0.65rem] uppercase tracking-[0.4em] text-gold/70 mb-3">{p.name}</div>
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-serif-display text-6xl text-ivory">{p.price}</span>
                <span className="text-xs text-ivory/50">{p.cadence}</span>
              </div>
              <p className="text-sm text-ivory/60 mb-8 leading-relaxed">{p.description}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ivory/80">
                    <span className="mt-1.5 h-px w-4 bg-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`group inline-flex items-center justify-center gap-2 py-3.5 text-xs uppercase tracking-[0.3em] transition-all ${
                  p.featured
                    ? "bg-gradient-gold text-primary-foreground hover:shadow-glow shadow-gold"
                    : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/5"
                }`}
              >
                {p.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Closing benediction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center max-w-4xl mx-auto pt-20 border-t border-border/60"
        >
          <p className="font-serif-display italic text-4xl md:text-6xl leading-[1.15] text-ivory text-balance">
            “May the light of the <span className="gold-text not-italic">Word</span> meet you wherever the day finds you.”
          </p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="mt-14 max-w-lg mx-auto"
          >
            <div className="flex border-b border-gold/40 focus-within:border-gold transition-colors">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email to begin"
                className="flex-1 bg-transparent py-4 text-center text-ivory placeholder:text-ivory/30 focus:outline-none"
              />
              <button type="submit" className="px-5 text-sm uppercase tracking-[0.3em] text-gold hover:text-primary-glow transition-colors">
                Begin
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
