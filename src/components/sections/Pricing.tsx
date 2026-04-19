import { Check, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { FloatingSticker } from "../FloatingSticker";

const plans = [
  {
    name: "Basic",
    price: "₹49k",
    period: "/ project",
    desc: "For founders ready to launch fast.",
    features: [
      "5-page modern website",
      "Mobile-first responsive design",
      "Basic SEO setup",
      "1 round of revisions",
      "30 days support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹1.2L",
    period: "/ project",
    desc: "Most loved by scaling brands.",
    features: [
      "Custom 10-page website + CMS",
      "Brand & motion design system",
      "Advanced SEO + analytics",
      "Conversion-focused copy",
      "3 rounds of revisions",
      "6 months support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹3L+",
    period: "/ retainer",
    desc: "Full-stack growth partner.",
    features: [
      "Web + App + Brand system",
      "Performance & email marketing",
      "Funnels & landing pages",
      "Dedicated senior team",
      "Unlimited revisions",
      "12 months support",
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-96 bg-gradient-hero opacity-50" />
      <FloatingSticker kind="asterisk" className="left-[5%] top-20 h-14 w-14 sm:h-20 sm:w-20" />
      <FloatingSticker kind="squiggle" delay={0.15} className="right-[7%] top-32 h-12 w-12 sm:h-16 sm:w-16" />
      <FloatingSticker kind="pinwheel" delay={0.25} className="bottom-20 right-[10%] hidden h-12 w-12 sm:block" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Pricing
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Plans for every <span className="text-gradient-mix">stage</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70">
              Simple, transparent pricing. Pick a starting point — we'll tailor
              the rest.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  p.highlight
                    ? "border-2 border-primary/60 bg-card glow-neon md:scale-105"
                    : "glass hover:border-primary/40"
                }`}
              >
                {p.highlight && (
                  <>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-purple/10" />
                    <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-neon px-3 py-1 text-xs font-bold text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      Popular
                    </div>
                  </>
                )}

                <div className="font-display text-2xl font-bold">{p.name}</div>
                <div className="mt-1 text-sm text-foreground/60">{p.desc}</div>

                <div className="mt-8 flex items-baseline gap-1">
                  <span
                    className={`font-display text-6xl font-bold ${
                      p.highlight ? "text-gradient-neon" : ""
                    }`}
                  >
                    {p.price}
                  </span>
                  <span className="text-sm text-foreground/50">{p.period}</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          p.highlight
                            ? "bg-gradient-neon"
                            : "bg-muted"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            p.highlight ? "text-primary-foreground" : "text-primary"
                          }`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <MagneticButton>
                    <a
                      href="#contact"
                      className={`block w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold transition-all ${
                        p.highlight
                          ? "bg-gradient-neon text-primary-foreground hover:shadow-[0_15px_40px_-10px_oklch(0.88_0.24_148/0.7)]"
                          : "glass hover:bg-white/5"
                      }`}
                    >
                      Get started
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
