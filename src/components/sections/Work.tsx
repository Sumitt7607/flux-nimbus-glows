import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { FloatingSticker } from "../FloatingSticker";

const work = [
  {
    title: "Lumen Finance",
    category: "Web Platform · Fintech",
    result: "+312% conversions",
    gradient:
      "linear-gradient(135deg, oklch(0.88 0.24 148 / 0.35), oklch(0.6 0.25 305 / 0.4))",
  },
  {
    title: "Nova Mart",
    category: "E-commerce · Brand",
    result: "₹1.2Cr ad-spend ROAS 6.4x",
    gradient:
      "linear-gradient(135deg, oklch(0.74 0.18 55 / 0.4), oklch(0.88 0.24 148 / 0.3))",
  },
  {
    title: "Halo Studios",
    category: "Mobile App · Creator Tools",
    result: "120k+ downloads in 90 days",
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.25 305 / 0.4), oklch(0.7 0.18 200 / 0.4))",
  },
  {
    title: "Atlas Realty",
    category: "Funnel · Lead Gen",
    result: "8.7x pipeline growth",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.22 340 / 0.35), oklch(0.74 0.18 55 / 0.35))",
  },
];

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden py-24 sm:py-32">
      <FloatingSticker kind="pinwheel" className="right-[5%] top-16 h-14 w-14 sm:h-20 sm:w-20" />
      <FloatingSticker kind="clover" delay={0.15} className="bottom-24 right-[8%] hidden h-12 w-12 sm:block" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Selected work
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Recent <span className="text-gradient-neon">launches</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
            >
              View all case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 0.1}>
              <div
                data-cursor-hover
                className="group relative aspect-[4/3] cursor-none overflow-hidden rounded-3xl border border-border bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_oklch(0_0_0/0.6)]"
              >
                {/* Gradient backdrop */}
                <div
                  className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110"
                  style={{ background: w.gradient }}
                />
                {/* Noise overlay */}
                <div className="noise pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />

                {/* Floating shapes */}
                <div className="absolute right-8 top-8 h-32 w-32 animate-blob rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute left-12 bottom-20 h-24 w-24 animate-blob rounded-full bg-primary/30 blur-2xl" />

                {/* Result chip overlay */}
                <div className="absolute left-7 top-7 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-full glass-strong px-4 py-1.5 text-xs font-semibold text-primary">
                    {w.result}
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                      {w.category}
                    </div>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                      {w.title}
                    </h3>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
