import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { SmoothScroll } from "@/components/landing/SmoothScroll";

interface PageShellProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
}

export const PageShell = ({ eyebrow, title, intro, children }: PageShellProps) => {
  return (
    <main className="relative bg-ink text-ivory min-h-screen">
      <SmoothScroll />
      <Nav />

      {/* Page hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-rays opacity-60" aria-hidden />
        <div className="container relative mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold">{eyebrow}</span>
            <span className="h-px w-10 bg-gold/60" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-5xl md:text-7xl leading-[1.05] text-ivory text-balance max-w-4xl mx-auto"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="mt-6 max-w-2xl mx-auto text-lg text-ivory/70 font-light leading-relaxed"
            >
              {intro}
            </motion.p>
          )}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
          />
        </div>
      </section>

      {children}

      <Footer />
    </main>
  );
};
