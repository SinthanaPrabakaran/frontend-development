import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import children from "@/assets/stage-children.jpg";
import teens from "@/assets/stage-teens.jpg";
import youngAdults from "@/assets/stage-young-adults.jpg";
import families from "@/assets/stage-families.jpg";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    numeral: "I",
    title: "Children",
    range: "Ages 4 — 12",
    promise: "Wonder planted early, faith that grows tall.",
    verse: "“Train up a child in the way he should go.” — Proverbs 22:6",
    img: children,
  },
  {
    numeral: "II",
    title: "Teens",
    range: "Ages 13 — 18",
    promise: "Identity anchored, conviction shaped, courage chosen.",
    verse: "“Let no one despise your youth.” — 1 Timothy 4:12",
    img: teens,
  },
  {
    numeral: "III",
    title: "Young Adults",
    range: "Ages 19 — 29",
    promise: "Calling discerned, scripture lived in the world.",
    verse: "“Seek first the kingdom of God.” — Matthew 6:33",
    img: youngAdults,
  },
  {
    numeral: "IV",
    title: "Families & Seniors",
    range: "30 and beyond",
    promise: "Households built, legacies written in light.",
    verse: "“As for me and my house…” — Joshua 24:15",
    img: families,
  },
];

export const LifeStages = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.5}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="stages" className="relative bg-ink overflow-hidden">
      {/* Header overlay */}
      <div className="absolute top-0 inset-x-0 z-20 pt-12 md:pt-16 pointer-events-none">
        <div className="container mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold/80">Four Chapters</span>
            </div>
            <h2 className="font-serif-display text-4xl md:text-5xl text-ivory">
              A scripture <em className="gold-text not-italic">for every season</em>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-ivory/50 max-w-xs">
            Scroll through the chapters of a life shaped by the Word.
          </p>
        </div>
      </div>

      <div className="relative md:h-screen md:overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row md:flex-nowrap md:h-screen md:items-center md:pl-[10vw] md:pr-[10vw]"
        >
          {stages.map((s, i) => (
            <article
              key={s.numeral}
              className="relative md:w-[70vw] md:flex-shrink-0 md:px-8 md:h-[80vh] flex flex-col md:flex-row md:items-stretch gap-6 md:gap-12 py-24 md:py-0 px-6 border-t md:border-t-0 md:border-r border-border/40"
            >
              {/* Image */}
              <div className="relative md:w-1/2 h-[60vh] md:h-full overflow-hidden grain">
                <img
                  src={s.img}
                  alt={`${s.title} — sacred imagery`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute top-4 left-4 text-[0.65rem] tracking-[0.4em] uppercase text-gold/80">
                  Chapter {s.numeral}
                </span>
              </div>

              {/* Text */}
              <div className="md:w-1/2 flex flex-col justify-center md:pr-6">
                <div className="font-serif-display text-[20vw] md:text-[14rem] leading-none text-gold/15 -mt-6 md:-mt-12 select-none">
                  {s.numeral}
                </div>
                <div className="-mt-12 md:-mt-32">
                  <div className="text-[0.7rem] uppercase tracking-[0.45em] text-gold/70 mb-3">{s.range}</div>
                  <h3 className="font-serif-display text-5xl md:text-6xl text-ivory mb-5">{s.title}</h3>
                  <p className="text-lg md:text-xl text-ivory/80 font-light leading-relaxed mb-6 max-w-md">
                    {s.promise}
                  </p>
                  <p className="font-serif-display italic text-base md:text-lg text-ivory/55 max-w-md mb-8">
                    {s.verse}
                  </p>
                  <a
                    href="#teachings"
                    className="group inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase text-gold hover:text-primary-glow transition-colors"
                  >
                    Explore Chapter {s.numeral}
                    <span className="h-px w-10 bg-gold group-hover:w-16 transition-all duration-500" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
