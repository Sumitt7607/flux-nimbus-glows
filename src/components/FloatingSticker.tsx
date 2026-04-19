import { motion } from "framer-motion";
import {
  AsteriskSticker,
  BoltSticker,
  CloverSticker,
  PinwheelSticker,
  SquiggleSticker,
} from "./StickerShapes";

const map = {
  clover: CloverSticker,
  bolt: BoltSticker,
  asterisk: AsteriskSticker,
  pinwheel: PinwheelSticker,
  squiggle: SquiggleSticker,
} as const;

type Kind = keyof typeof map;

interface Props {
  kind: Kind;
  className?: string;
  delay?: number;
  float?: "slow" | "fast";
  spin?: number;
}

/** A spring-entry sticker for decorating any section. Position via className. */
export function FloatingSticker({
  kind,
  className = "",
  delay = 0,
  float = "slow",
  spin = -90,
}: Props) {
  const C = map[kind];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: spin }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 14 }}
      className={`pointer-events-none absolute ${className}`}
    >
      <C
        className={`h-full w-full ${float === "slow" ? "animate-float-slow" : "animate-float"}`}
      />
    </motion.div>
  );
}
