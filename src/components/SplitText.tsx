import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  as = "h1",
}: Props) {
  const Tag = motion[as];
  const words = text.split(" ");

  return (
    <Tag
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block overflow-hidden pb-2 pr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0, filter: "blur(8px)" },
              visible: {
                y: "0%",
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
