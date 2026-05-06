import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/landing/PageShell";

const faqs = [
  {
    q: "What is Lumen, in one sentence?",
    a: "A Bible-centered learning platform that teaches scripture across every life stage — children, teens, young adults, families, and seniors — through cinematically crafted courses.",
  },
  {
    q: "Who teaches the courses?",
    a: "Theologians, pastors, scholars, and practitioners whose lives are shaped by the texts they unfold. Every teacher is vetted by our editorial council.",
  },
  {
    q: "Is Lumen tied to a particular denomination?",
    a: "No. We hold to historic Christian orthodoxy and the authority of scripture, while welcoming members across traditions.",
  },
  {
    q: "Can my whole family use one membership?",
    a: "Yes — the Household plan supports up to six members with age-appropriate curricula for each life stage.",
  },
  {
    q: "Are courses available offline?",
    a: "Disciple and Household members can download lessons for offline study on mobile and tablet.",
  },
  {
    q: "Do you offer scholarships?",
    a: "Always. Write to us and we will quietly arrange access — no questions asked, no application required.",
  },
  {
    q: "How do I cancel?",
    a: "From your account in two clicks. We will not charge again, and your library remains yours through the period you have paid for.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell
      eyebrow="Frequently Asked"
      title={<>Questions, <em className="gold-text not-italic">unhurried answers</em>.</>}
      intro="If your question is not here, write to us — we read every letter."
    >
      <section className="relative py-24 md:py-32 bg-night overflow-hidden">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="border-t border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-6 py-7 group"
                  >
                    <span className="font-serif-display text-2xl md:text-3xl text-ivory group-hover:text-gold transition-colors">
                      {f.q}
                    </span>
                    <span className={`flex-shrink-0 h-px w-8 bg-gold transition-transform duration-500 ${isOpen ? "rotate-90" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-lg leading-relaxed text-ivory/75 font-light">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default FAQ;
