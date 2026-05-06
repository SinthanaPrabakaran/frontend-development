import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/landing/PageShell";

const courses = [
  { num: "01", title: "The Gospel of John, Verse by Verse", instructor: "Dr. Eliza Harlan", duration: "12 sessions", stage: "Foundations", tone: "from-blush/40 to-gold-soft/40" },
  { num: "02", title: "Wisdom for the Weary: Psalms in Practice", instructor: "Pastor Samuel Boren", duration: "8 sessions", stage: "Devotional", tone: "from-sage/40 to-sky/40" },
  { num: "03", title: "Raising Children in the Word", instructor: "Anna & Mark Whitfield", duration: "6 sessions", stage: "Family", tone: "from-blush/40 to-lavender/40" },
  { num: "04", title: "Apologetics for a Skeptical Age", instructor: "Dr. Theo Marsden", duration: "10 sessions", stage: "Young Adults", tone: "from-lavender/40 to-sky/40" },
  { num: "05", title: "Prayer: A Quiet Architecture", instructor: "Sister Maren Cole", duration: "5 sessions", stage: "Spiritual Formation", tone: "from-gold-soft/40 to-blush/40" },
  { num: "06", title: "Romans, Reconsidered", instructor: "Rev. Jonas Field", duration: "14 sessions", stage: "Foundations", tone: "from-sage/40 to-gold-soft/40" },
];

const Courses = () => {
  return (
    <PageShell
      eyebrow="Course Suggestions"
      title={<>Lessons curated for <em className="gold-text not-italic">your season</em>.</>}
      intro="A library shaped by reverence — explore six suggestions chosen for depth, beauty, and honest study."
    >
      <section className="relative py-24 md:py-32 bg-night overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-blush/30 blur-3xl pointer-events-none" />
        <div className="container relative mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((c, i) => (
              <motion.article
                key={c.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 shadow-soft transition-all duration-500"
              >
                <div className={`relative h-40 bg-gradient-to-br ${c.tone} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-mist opacity-70" />
                  <span className="absolute top-5 left-6 font-serif-display text-5xl text-ivory/80">{c.num}</span>
                  <span className="absolute bottom-4 right-5 text-[0.6rem] uppercase tracking-[0.35em] text-ivory/70 bg-card/60 backdrop-blur px-3 py-1 rounded-full">
                    {c.stage}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif-display text-2xl text-ivory leading-tight mb-3 group-hover:translate-x-1 transition-transform duration-500">
                    {c.title}
                  </h3>
                  <p className="text-sm text-ivory/60">{c.instructor}</p>
                  <div className="flex items-center justify-between mt-8 pt-5 border-t border-border">
                    <span className="text-xs text-ivory/50">{c.duration}</span>
                    <Link
                      to="/course-preview"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary-deep group-hover:text-gold transition-colors"
                    >
                      Preview
                      <span className="h-px w-5 bg-current group-hover:w-9 transition-all duration-500" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-primary-foreground text-sm tracking-[0.25em] uppercase rounded-lg shadow-gold hover:shadow-glow transition-shadow"
            >
              Take the Quiz to Personalize
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Courses;
