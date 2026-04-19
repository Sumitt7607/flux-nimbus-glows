import { AtSign, Camera, Briefcase, Code, Zap } from "lucide-react";

const socials = [
  // { icon: AtSign, href: "#", label: "Twitter" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: Code, href: "#", label: "Facebook" },
];

const cols = [
  {
    title: "Services",
    links: ["Web Development", "App Development", "Brand Design", "Performance Marketing"],
  },
  {
    title: "Company",
    links: ["About", "Work", "Process", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Pricing", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-neon glow-neon">
                <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div> */}
              <span className="font-display text-xl font-bold tracking-tight">
                Nex<span className="text-gradient">core Technologies</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-foreground/60">
              A premium digital agency engineering motion-rich experiences for
              ambitious brands worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <Icon className="h-4 w-4 text-foreground/70 transition-colors group-hover:text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-foreground/80 transition-colors hover:text-primary"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div className="my-16 select-none overflow-hidden">
          <div className="font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_oklch(0.88_0.24_148/0.3)] md:text-[14rem]">
             NEXCORE 
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-foreground/50 md:flex-row">
          <div>© {new Date().getFullYear()} Nexcore Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
