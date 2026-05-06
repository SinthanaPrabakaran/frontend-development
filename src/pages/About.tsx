import { motion } from "framer-motion";
import { PageShell } from "@/components/landing/PageShell";

const pillars = [
  {
    num: "I",
    title: "Reverence for the Text",
    body: "We approach scripture as living word — taught with scholarship, humility, and unhurried attention.",
  },
  {
    num: "II",
    title: "Every Season of Life",
    body: "From the first questions of childhood to the quiet wisdom of seniority — one library, every age.",
  },
  {
    num: "III",
    title: "Beauty as Devotion",
    body: "Typography, image, and sound are crafted as offerings — to make the Word luminous on the page.",
  },
  {
    num: "IV",
    title: "A Global Household",
    body: "Members from over 60 nations study together. The Word belongs to no language alone.",
  },
];

const teachers = [
  { name: "Dr. Eliza Harlan", role: "Foundations & Gospels", country: "Edinburgh" },
  { name: "Pastor Samuel Boren", role: "Wisdom Literature", country: "Nairobi" },
  { name: "Dr. Theo Marsden", role: "Apologetics", country: "Cambridge" },
  { name: "Sister Maren Cole", role: "Contemplative Practice", country: "Assisi" },
];

const About = () => {
  return (
    <PageShell
      eyebrow="About Lumen"
      title={<>A quiet cathedral, <em className="gold-text not-italic">built for study</em>.</>}
      intro="Lumen began as a single classroom and grew into a library. We exist to make Bible-centered teaching beautiful, accessible, and alive across every life stage."
    >
      {/* Mission */}
      <section className="relative py-24 md:py-32 bg-night overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 font-serif-display text-3xl md:text-5xl leading-tight text-ivory"
          >
            Our <em className="gold-text not-italic">mission</em>.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="md:col-span-7 space-y-6 text-lg text-ivory/80 leading-relaxed font-light"
          >
            <p>
              We exist to illuminate the Word for every season of the soul — to teach scripture with the
              clarity it deserves and the artistry it inspires.
            </p>
            <p>
              Every course is shaped by teachers whose lives are shaped by the text. Every lesson is
              crafted as an invitation: into wonder, into study, into a quieter, deeper life.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <span className="h-px w-12 bg-gold" />
              <span className="font-serif-display italic gold-text text-lg">Soli Deo Gloria</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 max-w-6xl mx-auto">
            {pillars.map((p, i) => (
              <motion.article
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.1 }}
                className="bg-night p-10 md:p-14"
              >
                <div className="font-serif-display text-7xl gold-text mb-6">{p.num}</div>
                <h3 className="font-serif-display text-3xl text-ivory mb-3">{p.title}</h3>
                <p className="text-ivory/70 leading-relaxed">{p.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="relative py-24 md:py-32 bg-night overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold">Our Teachers</span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="font-serif-display text-4xl md:text-6xl text-ivory">
              Voices shaped by the <em className="gold-text not-italic">Word</em>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teachers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group p-8 border border-border bg-ink/60 hover:border-gold/50 transition-colors"
              >
                <div className="aspect-square mb-6 bg-gradient-gold/20 rounded-full overflow-hidden flex items-center justify-center font-serif-display text-5xl gold-text">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="font-serif-display text-xl text-ivory">{t.name}</h3>
                <p className="text-sm text-ivory/60 mt-1">{t.role}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gold/70 mt-3">{t.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
