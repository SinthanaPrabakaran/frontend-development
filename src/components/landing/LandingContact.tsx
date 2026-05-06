import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const LandingContact = () => {
  return (
    <section id="contact" className="relative py-32 md:py-40 bg-gradient-aurora overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mist opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gold-soft/30 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-primary-deep">Contact</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] text-ivory text-balance">
            Write to us — <em className="gold-text not-italic">we read every letter</em>.
          </h2>
          <p className="mt-6 text-lg text-ivory/70 font-light">
            A small, attentive team answers each message with the care it deserves.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-sm tracking-[0.25em] uppercase rounded-lg shadow-gold hover:shadow-glow transition-shadow"
            >
              Open the contact page
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="mailto:hello@lumen.study"
              className="inline-flex items-center gap-3 px-6 py-4 text-sm tracking-[0.25em] uppercase text-ivory/70 hover:text-gold transition-colors"
            >
              hello@lumen.study
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
