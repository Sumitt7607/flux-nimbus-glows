import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "../Reveal";
import { FloatingSticker } from "../FloatingSticker";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 2, suffix: "Cr+", label: "Revenue Generated" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years of Craft" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1800;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-gradient-neon">
      {val}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <FloatingSticker kind="clover" className="right-[8%] top-16 h-12 w-12 sm:h-16 sm:w-16" />
      <FloatingSticker kind="squiggle" delay={0.1} className="bottom-20 left-[6%] hidden h-14 w-14 sm:block" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                About Nexcore
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                We build the
                <br />
                <span className="text-gradient-mix">digital edge</span>
                <br />
                brands need.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg text-foreground/70">
                Nexcore Technologies is a full-stack digital agency obsessed with
                motion, performance, and outcomes. From strategy to launch, we
                partner with ambitious teams to ship products and campaigns that
                convert.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Strategy", "Design", "Engineering", "Growth"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-sm text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                  <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-px bg-gradient-mix opacity-20 blur-2xl" />
                  </div>
                  <div className="font-display text-5xl font-bold md:text-6xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm text-foreground/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
