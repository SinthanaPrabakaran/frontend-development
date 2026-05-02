import { motion } from "framer-motion";

const teachings = [
  { num: "01", title: "The Gospel of John, Verse by Verse", instructor: "Dr. Eliza Harlan", duration: "12 sessions", category: "Foundations" },
  { num: "02", title: "Wisdom for the Weary: Psalms in Practice", instructor: "Pastor Samuel Boren", duration: "8 sessions", category: "Devotional" },
  { num: "03", title: "Raising Children in the Word", instructor: "Anna & Mark Whitfield", duration: "6 sessions", category: "Family" },
  { num: "04", title: "Apologetics for a Skeptical Age", instructor: "Dr. Theo Marsden", duration: "10 sessions", category: "Young Adults" },
  { num: "05", title: "Prayer: A Quiet Architecture", instructor: "Sister Maren Cole", duration: "5 sessions", category: "Spiritual Formation" },
  { num: "06", title: "Romans, Reconsidered", instructor: "Rev. Jonas Field", duration: "14 sessions", category: "Foundations" },
];

export const FeaturedTeachings = () => {
  return (
    <section id="teachings" className="relative py-32 md:py-44 bg-night overflow-hidden">
      <div className="absolute inset-0 bg-gradient-rays opacity-30" />
      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold/80">Featured Teachings</span>
          </div>
          <h2 className="font-serif-display text-5xl md:text-7xl text-ivory leading-[1.05] mb-6">
            Lessons crafted with <em className="gold-text not-italic">scholarship and reverence</em>.
          </h2>
          <p className="text-ivory/60 max-w-xl text-lg leading-relaxed">
            Each course is shepherded by a teacher whose life is shaped by the text they unfold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50">
          {teachings.map((t, i) => (
            <motion.article
              key={t.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ink p-8 md:p-10 min-h-[340px] flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Hover gold trace */}
              <span className="pointer-events-none absolute top-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-700" />
              <span className="pointer-events-none absolute top-0 right-0 w-px h-0 bg-gradient-to-b from-gold to-transparent group-hover:h-full transition-all duration-700 delay-100" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-px w-0 bg-gradient-to-l from-gold to-transparent group-hover:w-full transition-all duration-700 delay-200" />
              <span className="pointer-events-none absolute bottom-0 left-0 w-px h-0 bg-gradient-to-t from-gold to-transparent group-hover:h-full transition-all duration-700 delay-300" />

              <div>
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif-display text-5xl text-gold/40 group-hover:text-gold transition-colors duration-500">
                    {t.num}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.35em] text-ivory/40">{t.category}</span>
                </div>
                <h3 className="font-serif-display text-2xl md:text-3xl text-ivory leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                  {t.title}
                </h3>
                <p className="text-sm text-ivory/50">{t.instructor}</p>
              </div>

              <div className="flex items-center justify-between mt-10">
                <span className="text-xs text-ivory/40">{t.duration}</span>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/70 group-hover:text-gold transition-colors">
                  Enter
                  <span className="h-px w-6 bg-gold/70 group-hover:w-10 transition-all duration-500" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
