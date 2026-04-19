import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { MagneticButton } from "../MagneticButton";
import { FloatingSticker } from "../FloatingSticker";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <FloatingSticker kind="pinwheel" className="left-[4%] top-16 h-14 w-14 sm:h-20 sm:w-20" />
      <FloatingSticker kind="asterisk" delay={0.2} className="right-[5%] top-24 h-12 w-12 sm:h-16 sm:w-16" />
      <FloatingSticker kind="bolt" delay={0.3} className="bottom-16 left-[8%] h-12 w-12" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 md:p-20">
          {/* Glows */}
          <div className="absolute -left-20 -top-20 h-96 w-96 animate-blob rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-[28rem] w-[28rem] animate-blob rounded-full bg-purple/30 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.88 0.24 148) 1px, transparent 1px), linear-gradient(90deg, oklch(0.88 0.24 148) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative text-center">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Let's talk
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tighter md:text-8xl">
                Let's build something
                <br />
                <span className="text-gradient-mix">powerful.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-xl text-lg text-foreground/70">
                Tell us about your goals. We'll come back within 24 hours with a
                proposal that ships.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton>
                  <a
                    href="https://wa.me/917607696315"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-neon px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_15px_50px_-10px_oklch(0.88_0.24_148/0.6)] transition-all hover:shadow-[0_25px_70px_-10px_oklch(0.88_0.24_148/0.8)]"
                  >
                    Contact Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 rounded-2xl glass px-8 py-4 text-sm font-semibold transition-colors hover:bg-white/5"
                  >
                    See our work
                  </a>
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/50">
                <span>hello@nexcoretech.com</span>
                <span className="hidden md:inline">·</span>
                <span>Bengaluru, IN</span>
                <span className="hidden md:inline">·</span>
                <span>Available worldwide</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
