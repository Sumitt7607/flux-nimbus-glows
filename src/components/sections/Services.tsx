import {
  Code2,
  Smartphone,
  Palette,
  Video,
  Megaphone,
  TrendingUp,
  Mail,
  Filter,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { FloatingSticker } from "../FloatingSticker";

const services = [
  { icon: Code2, title: "Website Development", desc: "Blazing-fast, SEO-ready sites built with modern stacks." },
  { icon: Smartphone, title: "App Development", desc: "Native and cross-platform apps users actually love." },
  { icon: Palette, title: "Graphic Designing", desc: "Brand systems, social creatives, and identity design." },
  { icon: Video, title: "Video Editing", desc: "Cinematic edits, reels, and motion-rich storytelling." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Full-funnel campaigns across every channel that matters." },
  { icon: TrendingUp, title: "Performance Marketing", desc: "Data-driven ads that scale ROAS, not vanity metrics." },
  { icon: Mail, title: "Email Marketing", desc: "Lifecycle flows and broadcasts that print revenue." },
  { icon: Filter, title: "Sales Funnels", desc: "High-converting funnels engineered end-to-end." },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-hero opacity-50" />
      <FloatingSticker kind="pinwheel" className="left-[5%] top-24 h-14 w-14 sm:h-20 sm:w-20" />
      <FloatingSticker kind="bolt" delay={0.15} className="right-[6%] top-48 h-12 w-12 sm:h-16 sm:w-16" />
      <FloatingSticker kind="asterisk" delay={0.25} className="bottom-24 left-[8%] h-14 w-14" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                What we do
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Services that <span className="text-gradient-neon">scale</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-md text-foreground/70">
              Eight disciplines, one team. We blend craft and conversion to build
              experiences that move metrics.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <a
                  href="https://wa.me/917607696315"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card/40 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_30px_60px_-20px_oklch(0.88_0.24_148/0.35)]"
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-px -z-10 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 bg-gradient-mix" />

                  <div className="mb-6 flex items-start justify-between">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-purple/15 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={2} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-foreground/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{s.desc}</p>

                  <div className="mt-6 h-px w-full origin-left scale-x-0 bg-gradient-neon transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
