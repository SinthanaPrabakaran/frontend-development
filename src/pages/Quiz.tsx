import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/landing/PageShell";
import { Link } from "react-router-dom";

interface Question {
  q: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    q: "Which season of life are you in?",
    options: [
      { label: "Childhood (4–12)", value: "children" },
      { label: "Teenage (13–18)", value: "teens" },
      { label: "Young adult (19–29)", value: "young" },
      { label: "Adult, family, or senior", value: "adult" },
    ],
  },
  {
    q: "Where would you place yourself in scripture study?",
    options: [
      { label: "Just beginning", value: "beginner" },
      { label: "Read regularly, want depth", value: "intermediate" },
      { label: "Studied for years", value: "advanced" },
      { label: "Returning after a long pause", value: "returning" },
    ],
  },
  {
    q: "What draws you most right now?",
    options: [
      { label: "The Gospels — the life of Christ", value: "gospels" },
      { label: "The Psalms — prayer and lament", value: "psalms" },
      { label: "Apologetics — wrestling with doubt", value: "apologetics" },
      { label: "Family discipleship", value: "family" },
    ],
  },
  {
    q: "How much time can you give each week?",
    options: [
      { label: "Ten quiet minutes", value: "10" },
      { label: "An unhurried half-hour", value: "30" },
      { label: "An hour or more", value: "60" },
      { label: "It varies — meet me where I am", value: "varies" },
    ],
  },
  {
    q: "What posture best fits your study?",
    options: [
      { label: "Solitary and contemplative", value: "solo" },
      { label: "Following a teacher's voice", value: "teacher" },
      { label: "In a small group", value: "group" },
      { label: "With my household", value: "household" },
    ],
  },
];

const recommendation = (answers: Record<number, string>) => {
  const stage = answers[0];
  const interest = answers[2];
  const map: Record<string, { course: string; teacher: string; verse: string }> = {
    gospels: {
      course: "The Gospel of John, Verse by Verse",
      teacher: "Dr. Eliza Harlan",
      verse: "“And the Word became flesh and dwelt among us.” — John 1:14",
    },
    psalms: {
      course: "Wisdom for the Weary: Psalms in Practice",
      teacher: "Pastor Samuel Boren",
      verse: "“The Lord is my shepherd; I shall not want.” — Psalm 23:1",
    },
    apologetics: {
      course: "Apologetics for a Skeptical Age",
      teacher: "Dr. Theo Marsden",
      verse: "“Be ready to give an answer, with gentleness and respect.” — 1 Peter 3:15",
    },
    family: {
      course: "Raising Children in the Word",
      teacher: "Anna & Mark Whitfield",
      verse: "“As for me and my house, we will serve the Lord.” — Joshua 24:15",
    },
  };
  const base = map[interest] ?? map.gospels;
  const stageLabel: Record<string, string> = {
    children: "Children's path",
    teens: "Teen path",
    young: "Young adult path",
    adult: "Adult & household path",
  };
  return { ...base, stage: stageLabel[stage] ?? "All-ages path" };
};

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const finished = step >= questions.length;
  const progress = Math.min(1, step / questions.length);

  const choose = (val: string) => {
    setAnswers((a) => ({ ...a, [step]: val }));
    setTimeout(() => setStep((s) => s + 1), 250);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  return (
    <PageShell
      eyebrow="Standard Quiz"
      title={<>Find your <em className="gold-text not-italic">starting place</em>.</>}
      intro="Five short questions. We will recommend the path through Lumen that fits your season."
    >
      <section className="relative py-16 md:py-24 bg-night overflow-hidden min-h-[60vh]">
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Progress */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">
              {finished ? "Complete" : `Question ${step + 1} of ${questions.length}`}
            </span>
            <div className="flex-1 h-px bg-border relative overflow-hidden">
              <motion.div
                animate={{ scaleX: finished ? 1 : progress }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-gradient-gold origin-left"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-serif-display text-3xl md:text-5xl text-ivory leading-tight mb-10 text-balance">
                  {questions[step].q}
                </h2>
                <div className="space-y-3">
                  {questions[step].options.map((o, i) => (
                    <motion.button
                      key={o.value}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      onClick={() => choose(o.value)}
                      className="group w-full text-left px-6 py-5 border border-border hover:border-gold bg-ink/40 hover:bg-ink transition-all flex items-center gap-5"
                    >
                      <span className="font-serif-display text-2xl gold-text w-8">{String.fromCharCode(65 + i)}</span>
                      <span className="flex-1 text-lg text-ivory group-hover:text-gold transition-colors">{o.label}</span>
                      <span className="h-px w-6 bg-gold/40 group-hover:w-12 transition-all duration-500" />
                    </motion.button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-8 text-xs uppercase tracking-[0.3em] text-ivory/50 hover:text-gold transition-colors"
                  >
                    ← Previous
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-8"
              >
                {(() => {
                  const r = recommendation(answers);
                  return (
                    <>
                      <div className="text-[0.65rem] uppercase tracking-[0.45em] text-gold mb-4">{r.stage}</div>
                      <h2 className="font-serif-display text-4xl md:text-6xl text-ivory leading-tight mb-6 text-balance">
                        We suggest you begin with <em className="gold-text not-italic">{r.course}</em>.
                      </h2>
                      <p className="text-ivory/70 mb-2">Taught by {r.teacher}</p>
                      <p className="font-serif-display italic text-xl text-ivory/60 mt-8 max-w-xl mx-auto">{r.verse}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <Link to="/course" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-gold text-primary-foreground text-sm tracking-[0.25em] uppercase shadow-gold hover:shadow-glow transition-shadow">
                          Preview Course →
                        </Link>
                        <button onClick={reset} className="px-7 py-3.5 border border-gold/40 text-gold text-sm tracking-[0.25em] uppercase hover:bg-gold/5 transition-colors">
                          Retake
                        </button>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageShell>
  );
};

export default Quiz;
