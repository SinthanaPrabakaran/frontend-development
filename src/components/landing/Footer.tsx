export const Footer = () => {
  return (
    <footer className="relative bg-ink border-t border-border/50">
      {/* Marquee of references */}
      <div className="overflow-hidden border-b border-border/50 py-6">
        <div className="flex animate-marquee whitespace-nowrap font-serif-display italic text-2xl text-gold/30">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 pr-12">
              {["Genesis 1:3", "Psalm 23", "Isaiah 40:31", "John 1:5", "Romans 8:28", "Philippians 4:13", "Revelation 21:5"].map((v) => (
                <span key={v + k} className="flex items-center gap-12">
                  {v}
                  <span className="text-gold/40">✶</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative inline-block w-5 h-5">
                <span className="absolute inset-0 rounded-full bg-gradient-gold" />
              </span>
              <span className="font-serif-display text-2xl text-ivory">Lumen</span>
            </div>
            <p className="text-sm text-ivory/50 max-w-sm leading-relaxed">
              A Bible-centered learning platform crafted for every season of the soul.
            </p>
          </div>
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/70 mb-4">Library</h4>
            <ul className="space-y-2 text-sm text-ivory/60">
              <li><a href="#stages" className="hover:text-gold transition-colors">Life Stages</a></li>
              <li><a href="#teachings" className="hover:text-gold transition-colors">Teachings</a></li>
              <li><a href="#devotional" className="hover:text-gold transition-colors">Devotional</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/70 mb-4">Lumen</h4>
            <ul className="space-y-2 text-sm text-ivory/60">
              <li><a href="#" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Teachers</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="gold-rule mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ivory/40">
          <span>© {new Date().getFullYear()} Lumen. Scripture in the public domain.</span>
          <span className="font-serif-display italic">Soli Deo Gloria</span>
        </div>
      </div>
    </footer>
  );
};
