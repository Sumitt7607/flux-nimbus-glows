import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { MagneticButton } from "../MagneticButton";
import {
  AsteriskSticker,
  BoltSticker,
  CloverSticker,
  PinwheelSticker,
  SquiggleSticker,
} from "../StickerShapes";

/* ---------- Animated word with sticker covering one letter ---------- */

type Sticker = {
  /** index of letter to replace (0-based) */
  index: number;
  Component: (p: { className?: string }) => ReactElement;
  /** total seconds the sticker lives before it shrinks away */
  revealAt: number;
  /** scale of sticker relative to letter cell */
  scale?: number;
  /** initial rotation for bouncy entry */
  spin?: number;
  /** vertical offset (em) to fine-tune resting position */
  offsetY?: number;
};

const letterVariants: Variants = {
  hidden: { y: "120%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.05,
      type: "spring",
      stiffness: 320,
      damping: 22,
      mass: 0.9,
    },
  }),
};

/* Letter that is initially hidden under a sticker, then pops in */
function HiddenLetter({
  ch,
  delay,
}: {
  ch: string;
  delay: number;
}) {
  return (
    <motion.span
      className="inline-block"
      initial={{ scale: 0, opacity: 0, y: "20%" }}
      animate={{ scale: 1, opacity: 1, y: "0%" }}
      transition={{
        delay,
        type: "spring",
        stiffness: 380,
        damping: 18,
        mass: 0.7,
      }}
    >
      {ch}
    </motion.span>
  );
}

function AnimatedWord({
  word,
  startIndex,
  sticker,
  className = "",
}: {
  word: string;
  startIndex: number;
  sticker?: Sticker;
  className?: string;
}) {
  const letters = word.split("");
  return (
    <span className={`inline-flex ${className}`}>
      {letters.map((ch, i) => {
        const isStickerLetter = sticker && sticker.index === i;

        if (isStickerLetter) {
          // Sticker sits on top, then shrinks at `revealAt`. Letter pops in at same moment.
          return (
            <span
              key={i}
              className="relative inline-block overflow-visible"
              style={{ lineHeight: 0.95 }}
            >
              {/* Letter — appears the moment the sticker leaves */}
              <span className="inline-block">
                <HiddenLetter ch={ch} delay={sticker.revealAt} />
              </span>

              {/* Sticker overlay */}
              <Sticker
                Component={sticker.Component}
                revealAt={sticker.revealAt}
                scale={sticker.scale ?? 0.95}
                spin={sticker.spin ?? -180}
                offsetY={sticker.offsetY ?? 0}
              />
            </span>
          );
        }

        return (
          <span
            key={i}
            className="relative inline-block overflow-hidden align-bottom"
            style={{ lineHeight: 0.95 }}
          >
            <motion.span
              className="inline-block"
              custom={startIndex + i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              {ch}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/* Sticker — drops in with spring, hangs, then shrinks away revealing the letter beneath.
   `revealAt` is the moment (in seconds) the sticker disappears. */
function Sticker({
  Component,
  revealAt,
  scale,
  spin,
  offsetY,
}: {
  Component: (p: { className?: string }) => ReactElement;
  revealAt: number;
  scale: number;
  spin: number;
  offsetY: number;
}) {
  // Time budget: 0 → entry overshoot → settle → hold → shrink out at revealAt
  const total = revealAt + 0.35; // small tail after shrink
  const tEntry = 0.25 / total;
  const tSettle = 0.4 / total;
  const tShrink = revealAt / total;

  return (
    <motion.span
      className="pointer-events-none absolute left-1/2 top-1/2 z-10"
      style={{
        translateX: "-50%",
        translateY: `calc(-50% + ${offsetY}em)`,
      }}
      initial={{ scale: 0, rotate: spin, opacity: 0 }}
      animate={{
        scale: [0, scale * 1.18, scale, scale, 0],
        rotate: [spin, 10, -4, 0, 0],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: total,
        times: [0, tEntry, tSettle, tShrink, 1],
        ease: "easeInOut",
      }}
    >
      <span
        className="block"
        style={{
          width: "1em",
          height: "1em",
          fontSize: "1.15em",
        }}
      >
        <Component className="h-full w-full" />
      </span>
    </motion.span>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Word config — sticker on one letter per word, GSAP-style
  const words = [
    {
      text: "Profit",
      sticker: {
        index: 0, // P
        Component: PinwheelSticker,
        revealAt: 1.6,
        scale: 1.05,
        spin: -210,
        offsetY: -0.05,
      } as Sticker,
    },
    {
      text: "Power",
      sticker: {
        index: 1, // o
        Component: BoltSticker,
        revealAt: 2.0,
        scale: 1.25,
        spin: -160,
        offsetY: -0.02,
      } as Sticker,
    },
    {
      text: "Presence",
      sticker: {
        index: 6, // c
        Component: AsteriskSticker,
        revealAt: 2.4,
        scale: 1.1,
        spin: -240,
        offsetY: -0.05,
      } as Sticker,
    },
  ];

  let cumulative = 0;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* Mouse-follow glow (desktop only) */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-30 blur-3xl will-change-transform md:block"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.25 305 / 0.45) 0%, transparent 70%)",
        }}
      />

      {/* Floating decorative stickers */}
      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute left-[4%] top-[14%] h-12 w-12 opacity-90 sm:left-[6%] sm:top-[18%] sm:h-20 sm:w-20"
        initial={{ opacity: 0, scale: 0, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 14 }}
      >
        <CloverSticker className="h-full w-full animate-float" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute right-[5%] top-[16%] h-14 w-14 opacity-90 sm:right-[8%] sm:top-[22%] sm:h-24 sm:w-24"
        initial={{ opacity: 0, scale: 0, rotate: 90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 14 }}
      >
        <SquiggleSticker className="h-full w-full animate-float-slow" />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="pointer-events-none absolute bottom-[10%] right-[8%] h-10 w-10 opacity-90 sm:bottom-[18%] sm:right-[14%] sm:h-16 sm:w-16"
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 14 }}
      >
        <PinwheelSticker className="h-full w-full animate-float" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute bottom-[14%] left-[6%] h-12 w-12 opacity-90 sm:h-14 sm:w-14"
        initial={{ opacity: 0, scale: 0, rotate: 60 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 14 }}
      >
        <AsteriskSticker className="h-full w-full animate-float-slow" />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.01 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.01 240) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-4 text-center sm:px-6"
      >
        {/* Eyebrow */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] font-medium text-foreground/80 sm:mb-10 sm:px-4 sm:py-2 sm:text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Premium Digital Agency · Available for Projects
        </motion.div> */}

        {/* Headline — three words stacked */}
        <h1
          className="font-display font-bold tracking-tight text-foreground"
          style={{
            fontSize: "clamp(4.5rem, 16vw, 11rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          {words.map((w, wi) => {
            const startIndex = cumulative;
            cumulative += w.text.length;
            return (
              <span key={wi} className="block">
                <AnimatedWord
                  word={w.text}
                  startIndex={startIndex}
                  sticker={w.sticker}
                />
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-balance px-2 text-base text-foreground/65 sm:mt-10 sm:text-lg md:text-xl"
        >
          We craft motion-rich digital experiences that turn attention into
          revenue — websites, apps, brands, and growth systems engineered to
          scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.75, duration: 0.7 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
          <MagneticButton>
            <a
              href="https://wa.me/917607696315"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-foreground/90 sm:px-7 sm:py-4"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>
          {/* <MagneticButton>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5 sm:px-7 sm:py-4"
            >
              <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              View Work
            </a>
          </MagneticButton> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
