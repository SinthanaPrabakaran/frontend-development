import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#stages", label: "Life Stages" },
  { href: "#teachings", label: "Teachings" },
  { href: "#devotional", label: "Devotional" },
  { href: "#testimonies", label: "Testimonies" },
  { href: "#membership", label: "Membership" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-xl bg-ink/60 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-block w-6 h-6">
            <span className="absolute inset-0 rounded-full bg-gradient-gold blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-1 rounded-full bg-gradient-gold" />
          </span>
          <span className="font-serif-display text-2xl tracking-wide text-ivory">Lumen</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-ivory/70 hover:text-ivory transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#membership"
          className="group relative inline-flex items-center gap-2 px-5 py-2 text-sm tracking-wide text-ink bg-gradient-gold rounded-sm shadow-gold hover:shadow-glow transition-shadow"
        >
          Begin
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.header>
  );
};
