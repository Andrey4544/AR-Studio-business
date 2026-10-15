import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';

const confettiPieces = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: `${(index - 11.5) * 5.1}vw`,
  y: `${90 + ((index * 37) % 110)}px`,
  rotation: `${(index * 137) % 720}deg`,
  delay: `${(index % 6) * 24}ms`,
  width: `${5 + (index % 4) * 2}px`,
  height: `${8 + (index % 5) * 2}px`,
  color: ['#ef4444', '#dc2626', '#f87171', '#fb7185', '#fca5a5', '#fbbf24'][index % 6],
}));

export default function PageConfetti() {
  const { pathname } = useLocation();
  const [burstId, setBurstId] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion.current) return;

    setEnabled(true);
    const timeout = window.setTimeout(() => setEnabled(false), 1150);
    setBurstId(id => id + 1);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (!enabled || reducedMotion.current) return null;

  return (
    <div className="page-confetti-layer" aria-hidden="true">
      {confettiPieces.map(piece => (
        <span
          key={`${burstId}-${piece.id}`}
          className="page-confetti-piece"
          style={{
            left: '50%',
            top: '38px',
            width: piece.width,
            height: piece.height,
            backgroundColor: piece.color,
            animationDelay: piece.delay,
            '--confetti-x': piece.x,
            '--confetti-y': piece.y,
            '--confetti-rotation': piece.rotation,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
