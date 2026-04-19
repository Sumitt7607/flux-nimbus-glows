import { Reveal } from "../Reveal";
import { FloatingSticker } from "../FloatingSticker";

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "Deep-dive into goals, audience, and constraints. We map the win.",
  },
  {
    n: "02",
    title: "Strategize",
    desc: "Positioning, architecture, and a roadmap aligned to outcomes.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Brand, UX, and motion systems crafted to convert and delight.",
  },
  {
    n: "04",
    title: "Build",
    desc: "Senior engineers ship fast, accessible, performant experiences.",
  },
  {
    n: "05",
    title: "Launch & Scale",
    desc: "We go live, measure, iterate, and scale with paid media.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <FloatingSticker kind="bolt" className="right-[6%] top-20 h-12 w-12 sm:h-16 sm:w-16" />
      <FloatingSticker kind="clover" delay={0.15} className="bottom-24 left-[5%] hidden h-14 w-14 sm:block" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              How we work
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              A process built for <span className="text-gradient-neon">speed</span>.
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-purple/40 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div
                  className={`relative flex items-start gap-8 md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 -translate-x-1/2 md:left-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 animate-pulse-glow rounded-full" />
                      <div className="relative h-4 w-4 rounded-full bg-gradient-neon ring-4 ring-background" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="ml-16 flex-1 md:ml-0 md:w-[calc(50%-3rem)]">
                    <div className="group rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                      <div className="font-display text-5xl font-bold text-gradient-mix">
                        {s.n}
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-foreground/60">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
