import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1280px,calc(100%-2rem))] -translate-x-1/2 rounded-2xl transition-all duration-500 ${
        scrolled ? "glass-strong shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-neon glow-neon">
            <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div> */}
          <span className="font-display text-lg font-bold tracking-tight">
            Nex<span className="text-gradient">core Technologies</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-neon transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-neon px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-shadow hover:glow-neon"
            >
              Contact
              <Zap className="h-3.5 w-3.5" />
            </a>
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg glass md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden border-t border-border md:hidden"
        >
          <ul className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-neon px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact
            </a>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
