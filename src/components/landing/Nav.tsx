import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/course-preview", label: "Preview" },
  { href: "/quiz", label: "Quiz" },
  { href: "/testimonials", label: "Testimonies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-xl bg-card/80 border-b border-border/60 shadow-soft" : "bg-card/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-block w-6 h-6">
            <span className="absolute inset-0 rounded-full bg-gradient-gold blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="absolute inset-1 rounded-full bg-gradient-gold" />
          </span>
          <span className="font-serif-display text-2xl tracking-wide text-ivory">Lumen</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative text-sm transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-500 ${
                  active ? "text-ivory after:scale-x-100" : "text-ivory/70 hover:text-ivory after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/quiz"
            className="hidden sm:inline-flex group relative items-center gap-2 px-5 py-2 text-sm tracking-wide text-primary-foreground bg-gradient-gold rounded-sm shadow-gold hover:shadow-glow transition-shadow"
          >
            Begin
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-ivory transition-transform ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-ivory transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-ivory transition-transform ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="lg:hidden overflow-hidden bg-night/95 backdrop-blur-xl border-t border-border/50"
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`py-3 font-serif-display text-2xl border-b border-border/50 ${
                location.pathname === l.href ? "text-gold" : "text-ivory"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
};
