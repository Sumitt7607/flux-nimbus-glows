import { Award, HeartHandshake, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { FloatingSticker } from "../FloatingSticker";

const reasons = [
  {
    icon: Award,
    title: "3+ Years of Craft",
    desc: "Hundreds of projects shipped for startups, SMBs, and enterprises.",
  },
  {
    icon: Rocket,
    title: "₹2Cr+ Revenue Generated",
    desc: "Marketing systems and funnels engineered for measurable ROI.",
  },
  {
    icon: ShieldCheck,
    title: "1 Year Free Support",
    desc: "We don't ghost after launch — every build comes with a year of care.",
  },
  {
    icon: HeartHandshake,
    title: "Partner, not vendor",
    desc: "Senior-led teams embedded with you. No handoffs, no juniors-only crews.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <FloatingSticker kind="squiggle" className="right-[8%] top-20 h-14 w-14 sm:h-20 sm:w-20" />
      <FloatingSticker kind="clover" delay={0.15} className="bottom-32 left-[5%] hidden h-12 w-12 sm:block" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Why Nexcore
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Built different.
                <br />
                <span className="text-gradient-mix">Trusted globally.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-foreground/70">
                We're a small senior team that ships big results. No fluff, no
                vapor — just measurable outcomes wrapped in beautiful work.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-neon text-primary-foreground transition-transform duration-500 group-hover:rotate-12">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                    <p className="mt-2 text-sm text-foreground/60">{r.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
