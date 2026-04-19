import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 450);
      }
      setProgress(p);
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-neon">
              <Zap className="h-10 w-10 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-2xl font-bold tracking-tight"
          >
            <span className="text-gradient-neon">NEXCORE</span>
            <span className="text-foreground/70"> TECHNOLOGIES</span>
          </motion.div>

          <div className="mt-8 h-[2px] w-64 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-gradient-mix"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="mt-3 font-mono text-xs text-muted-foreground">
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
