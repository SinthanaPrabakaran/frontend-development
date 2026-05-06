import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pillars = [
  { num: "I", title: "Reverence for the Text", body: "Scripture taught as living word — with scholarship and humility." },
  { num: "II", title: "Every Season of Life", body: "From childhood to seniority — one library, every age." },
  { num: "III", title: "Beauty as Devotion", body: "Typography, image, sound — crafted as offerings." },
];

export const LandingAbout = () => {
  return (
    <section id="about" className="relative py-32 md:py-44 bg-night overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-blush/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-lavender/40 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.45em] text-primary-deep">About Us</span>
            </div>
            <h2 className="font-serif-display text-4xl md:text-6xl leading-[1.05] text-ivory">
              A quiet cathedral, <em className="gold-text not-italic">built for study</em>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-7 space-y-5 text-lg text-ivory/75 leading-relaxed font-light"
          >
            <p>
              Lumen began as a single classroom and grew into a library — a Bible-centered platform crafted to make
              teaching beautiful, accessible, and alive across every life stage.
            </p>
            <p>
              Every course is shaped by teachers whose lives are shaped by the text. Every lesson is an invitation
              into wonder, into study, into a quieter, deeper life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 pt-2 text-sm uppercase tracking-[0.3em] text-primary-deep hover:text-gold transition-colors"
            >
              <span className="h-px w-10 bg-current" />
              Read our story
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 max-w-6xl mx-auto rounded-xl overflow-hidden">
          {pillars.map((p, i) => (
            <motion.article
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              className="bg-card p-10"
            >
              <div className="font-serif-display text-6xl gold-text mb-5">{p.num}</div>
              <h3 className="font-serif-display text-2xl text-ivory mb-3">{p.title}</h3>
              <p className="text-ivory/70 leading-relaxed text-sm">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
