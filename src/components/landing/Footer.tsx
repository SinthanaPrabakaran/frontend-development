import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-ink border-t border-border/50">
      {/* Marquee of references */}
      <div className="overflow-hidden border-b border-border/50 py-6">
        <div className="flex animate-marquee whitespace-nowrap font-serif-display italic text-2xl text-gold/50">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 pr-12">
              {["Genesis 1:3", "Psalm 23", "Isaiah 40:31", "John 1:5", "Romans 8:28", "Philippians 4:13", "Revelation 21:5"].map((v) => (
                <span key={v + k} className="flex items-center gap-12">
                  {v}
                  <span className="text-gold/60">✶</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="relative inline-block w-5 h-5">
                <span className="absolute inset-0 rounded-full bg-gradient-gold" />
              </span>
              <span className="font-serif-display text-2xl text-ivory">Lumen</span>
            </Link>
            <p className="text-sm text-ivory/60 max-w-sm leading-relaxed">
              A Bible-centered learning platform crafted for every season of the soul.
            </p>
          </div>
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold mb-4">Library</h4>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><Link to="/courses" className="hover:text-gold transition-colors">Course Suggestions</Link></li>
              <li><Link to="/course-preview" className="hover:text-gold transition-colors">Course Preview</Link></li>
              <li><Link to="/quiz" className="hover:text-gold transition-colors">Standard Quiz</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold transition-colors">Testimonies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold mb-4">Lumen</h4>
            <ul className="space-y-2 text-sm text-ivory/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="gold-rule mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory/50">
          <span>© {new Date().getFullYear()} Lumen. Scripture in the public domain.</span>
          <span className="font-serif-display italic">Soli Deo Gloria</span>
        </div>
      </div>
    </footer>
  );
};
