import { motion } from "framer-motion";
import { useState } from "react";
import bibleImg from "@/assets/verse-bible.jpg";

export const DailyVerse = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="devotional" className="relative py-32 md:py-44 bg-ink overflow-hidden grain">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img src={bibleImg} alt="An open Bible bathed in golden light" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
            <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold/80">Verse of the Day</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif-display"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-ivory text-balance">
                <span className="float-left font-serif-display gold-text text-7xl md:text-8xl leading-[0.8] mr-3 mt-2">F</span>
                or I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.45 }}
              className="mt-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-gold" />
              <span className="font-serif-display tracking-wider gold-text text-lg">Jeremiah 29:11</span>
            </motion.div>

            <motion.form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 max-w-md"
            >
              <label className="block text-xs uppercase tracking-[0.3em] text-ivory/50 mb-3">
                Receive a verse each dawn
              </label>
              <div className="flex border-b border-gold/40 focus-within:border-gold transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent py-3 text-ivory placeholder:text-ivory/30 focus:outline-none"
                />
                <button type="submit" className="px-4 text-sm uppercase tracking-[0.25em] text-gold hover:text-primary-glow transition-colors">
                  Subscribe →
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
