import { useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/landing/PageShell";
import { toast } from "@/hooks/use-toast";

const channels = [
  { label: "General inquiries", value: "hello@lumen.study" },
  { label: "Membership support", value: "members@lumen.study" },
  { label: "Press & partnerships", value: "press@lumen.study" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Letter received", description: "We will reply within two days." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageShell
      eyebrow="Contact"
      title={<>Write to us — we <em className="gold-text not-italic">read every letter</em>.</>}
      intro="A small, attentive team answers each message with the care it deserves."
    >
      <section className="relative py-24 md:py-32 bg-night overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-ivory/60 mb-3">Your name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-gold/40 focus:border-gold py-3 text-ivory placeholder:text-ivory/30 focus:outline-none transition-colors"
                placeholder="Mary Anning"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-ivory/60 mb-3">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-gold/40 focus:border-gold py-3 text-ivory placeholder:text-ivory/30 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-ivory/60 mb-3">Letter</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-gold/40 focus:border-gold py-3 text-ivory placeholder:text-ivory/30 focus:outline-none resize-none transition-colors"
                placeholder="Write freely…"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-gold text-primary-foreground text-sm tracking-[0.25em] uppercase shadow-gold hover:shadow-glow transition-shadow"
            >
              Send Letter
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.form>

          {/* Channels */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.4em] text-gold mb-4">By post</div>
              <p className="font-serif-display text-2xl leading-relaxed text-ivory">
                Lumen Study<br />
                14 Lantern Court<br />
                Edinburgh, EH1 1AB<br />
                Scotland
              </p>
            </div>
            <div className="gold-rule" />
            <div className="space-y-5">
              {channels.map((c) => (
                <div key={c.value}>
                  <div className="text-[0.65rem] uppercase tracking-[0.35em] text-ivory/50">{c.label}</div>
                  <a href={`mailto:${c.value}`} className="font-serif-display text-xl gold-text hover:opacity-80 transition-opacity">
                    {c.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
