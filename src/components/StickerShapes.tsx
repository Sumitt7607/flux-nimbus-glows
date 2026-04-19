// Decorative gradient "sticker" shapes inspired by playful editorial design.
// Each component renders an SVG with built-in gradient + soft shadow.

type ShapeProps = { className?: string };

export function CloverSticker({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clover-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.18 320)" />
          <stop offset="100%" stopColor="oklch(0.55 0.25 285)" />
        </linearGradient>
        <filter id="clover-s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#clover-s)" fill="url(#clover-g)">
        <circle cx="50" cy="22" r="22" />
        <circle cx="78" cy="50" r="22" />
        <circle cx="50" cy="78" r="22" />
        <circle cx="22" cy="50" r="22" />
        <circle cx="50" cy="50" r="14" fill="oklch(0.65 0.22 305)" />
      </g>
    </svg>
  );
}

export function BoltSticker({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bolt-g" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.95 0.22 145)" />
          <stop offset="100%" stopColor="oklch(0.78 0.24 150)" />
        </linearGradient>
        <filter id="bolt-s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.4" />
        </filter>
      </defs>
      <path
        filter="url(#bolt-s)"
        fill="url(#bolt-g)"
        d="M58 4 L18 56 H44 L36 96 L82 38 H54 L62 4 Z"
      />
    </svg>
  );
}

export function AsteriskSticker({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ast-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.82 0.18 50)" />
          <stop offset="100%" stopColor="oklch(0.7 0.22 30)" />
        </linearGradient>
        <filter id="ast-s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#ast-s)" fill="url(#ast-g)">
        {[0, 45, 90, 135].map((deg) => (
          <rect
            key={deg}
            x="42"
            y="8"
            width="16"
            height="84"
            rx="8"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="10" fill="oklch(0.92 0.15 60)" />
      </g>
    </svg>
  );
}

export function PinwheelSticker({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pin-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.82 0.2 45)" />
          <stop offset="100%" stopColor="oklch(0.7 0.24 25)" />
        </linearGradient>
        <linearGradient id="pin-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.18 320)" />
          <stop offset="100%" stopColor="oklch(0.6 0.25 300)" />
        </linearGradient>
        <filter id="pin-s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#pin-s)">
        <path d="M50 50 L50 4 Q72 14 72 28 Z" fill="url(#pin-g1)" />
        <path d="M50 50 L96 50 Q86 72 72 72 Z" fill="url(#pin-g2)" />
        <path d="M50 50 L50 96 Q28 86 28 72 Z" fill="url(#pin-g1)" />
        <path d="M50 50 L4 50 Q14 28 28 28 Z" fill="url(#pin-g2)" />
      </g>
    </svg>
  );
}

export function SquiggleSticker({ className }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sq-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.18 320)" />
          <stop offset="100%" stopColor="oklch(0.55 0.25 285)" />
        </linearGradient>
        <filter id="sq-s" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.2" floodOpacity="0.35" />
        </filter>
      </defs>
      <path
        filter="url(#sq-s)"
        d="M8 50 Q24 10, 40 50 T72 50 T96 50"
        stroke="url(#sq-g)"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
