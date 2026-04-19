import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "../Reveal";
import { FloatingSticker } from "../FloatingSticker";

const testimonials = [
  {
    quote:
      "Nexcore rebuilt our website and ads engine in 6 weeks. ROAS jumped from 2.1x to 5.8x. They feel like an extension of our team.",
    name: "Priya Sharma",
    role: "CMO, Lumen Finance",
  },
  {
    quote:
      "The motion design and craft are next level. Our launch trended on social and we hit 120k installs in the first quarter alone.",
    name: "Arjun Mehta",
    role: "Founder, Halo Studios",
  },
  {
    quote:
      "Senior, calm, and outcome-obsessed. Nexcore delivered a funnel that 8x'd our pipeline without inflating spend. Rare combo.",
    name: "Ananya Verma",
    role: "VP Growth, Atlas Realty",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <FloatingSticker kind="squiggle" className="left-[6%] top-20 h-14 w-14 sm:h-20 sm:w-20" />
      <FloatingSticker kind="bolt" delay={0.15} className="right-[7%] top-28 h-12 w-12 sm:h-16 sm:w-16" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Loved by founders
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            What clients <span className="text-gradient-mix">say</span>.
          </h2>
        </Reveal>

        <div className="relative mt-16 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl glass-strong p-10 md:p-14"
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-primary/70" strokeWidth={1.5} />
              <p className="font-display text-2xl font-medium leading-snug md:text-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-mix font-semibold text-foreground">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-foreground/60">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-primary" : "w-4 bg-muted hover:bg-foreground/30"
              }`}
              aria-label={`Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
