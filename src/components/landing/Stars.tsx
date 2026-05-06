import { useMemo } from "react";

interface StarsProps {
  count?: number;
  className?: string;
}

export const Stars = ({ count = 80, className = "" }: StarsProps) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 4,
      })),
    [count]
  );
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-gold animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            opacity: 0.7,
            boxShadow: "0 0 6px hsl(var(--gold) / 0.7)",
          }}
        />
      ))}
    </div>
  );
};
