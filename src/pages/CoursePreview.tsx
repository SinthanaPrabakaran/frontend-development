import { motion } from "framer-motion";
import { PageShell } from "@/components/landing/PageShell";
import verseImg from "@/assets/verse-bible.jpg";
import { Link } from "react-router-dom";

const sessions = [
  { num: "01", title: "In the Beginning was the Word", duration: "24 min", locked: false },
  { num: "02", title: "Light Shines in the Darkness", duration: "27 min", locked: false },
  { num: "03", title: "The Word Made Flesh", duration: "31 min", locked: false },
  { num: "04", title: "Living Water at the Well", duration: "29 min", locked: true },
  { num: "05", title: "I Am the Bread of Life", duration: "33 min", locked: true },
  { num: "06", title: "The Light of the World", duration: "28 min", locked: true },
  { num: "07", title: "I Am the Good Shepherd", duration: "30 min", locked: true },
  { num: "08", title: "Lazarus, Come Forth", duration: "35 min", locked: true },
  { num: "09", title: "The Hour Has Come", duration: "32 min", locked: true },
  { num: "10", title: "It Is Finished", duration: "38 min", locked: true },
  { num: "11", title: "He Is Risen", duration: "34 min", locked: true },
  { num: "12", title: "Feed My Sheep", duration: "30 min", locked: true },
];

const CoursePreview = () => {
  return (
    <PageShell
      eyebrow="Course Preview"
      title={<>The Gospel of John, <em className="gold-text not-italic">verse by verse</em>.</>}
      intro="A twelve-session journey through the fourth Gospel — taught by Dr. Eliza Harlan."
    >
      {/* Trailer / hero card */}
      <section className="relative py-16 md:py-24 bg-night overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative aspect-video overflow-hidden group cursor-pointer"
          >
            <img src={verseImg} alt="Course trailer" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-4 border border-gold/30 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                <span className="ml-1 border-y-[10px] border-y-transparent border-l-[14px] border-l-primary-foreground" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-[0.65rem] uppercase tracking-[0.4em] text-ivory">Watch Trailer • 2 min</div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">Foundations Series</div>
            <p className="text-lg leading-relaxed text-ivory/80 font-light">
              We walk through John's Gospel slowly — alert to its symbols, its silences, and its claim
              that the Word itself became flesh and dwelt among us.
            </p>
            <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.35em] text-ivory/50">Sessions</dt>
                <dd className="font-serif-display text-3xl text-ivory mt-1">12</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.35em] text-ivory/50">Duration</dt>
                <dd className="font-serif-display text-3xl text-ivory mt-1">6h 21m</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.35em] text-ivory/50">Level</dt>
                <dd className="font-serif-display text-3xl text-ivory mt-1">All</dd>
              </div>
              <div>
                <dt className="text-[0.6rem] uppercase tracking-[0.35em] text-ivory/50">Companion</dt>
                <dd className="font-serif-display text-3xl text-ivory mt-1">PDF</dd>
              </div>
            </dl>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/quiz" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-gold text-primary-foreground text-sm tracking-[0.25em] uppercase shadow-gold hover:shadow-glow transition-shadow">
                Take Placement Quiz →
              </Link>
              <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase hover:bg-gold/5 transition-colors">
                Begin Course
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Session list */}
      <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold">Curriculum</span>
          </div>
          <ul className="border-t border-border">
            {sessions.map((s, i) => (
              <motion.li
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.03 }}
                className="group flex items-center gap-6 py-6 border-b border-border hover:bg-night/40 transition-colors px-2"
              >
                <span className="font-serif-display text-3xl gold-text w-12">{s.num}</span>
                <span className="flex-1 font-serif-display text-xl md:text-2xl text-ivory">{s.title}</span>
                <span className="hidden sm:inline text-xs uppercase tracking-[0.25em] text-ivory/40">{s.duration}</span>
                <span className={`text-xs uppercase tracking-[0.25em] ${s.locked ? "text-ivory/40" : "text-gold"}`}>
                  {s.locked ? "Members" : "Preview"}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
};

export default CoursePreview;
