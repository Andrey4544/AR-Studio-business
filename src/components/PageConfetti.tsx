import { useEffect, useState, type CSSProperties } from 'react';
import { useLocation } from 'react-router-dom';

const confettiColors = ['#ff1744', '#e11d48', '#f43f5e', '#ef4444', '#fecdd3', '#fbbf24'];
const confettiPieces = Array.from({ length: 96 }, (_, index) => {
  const emitter = index % 6;
  const drift = ((Math.floor(index / 6) % 5) - 2) * 4.5;
  const destinationY = 24 + ((index * 47) % 72);
  return {
    id: index,
    originX: 8 + emitter * 16.8,
    x: `${drift}vw`,
    midX: `${drift * 0.45}vw`,
    y: `${destinationY}vh`,
    midY: `${destinationY * 0.5}vh`,
    rotation: `${(index * 137) % 720}deg`,
    midRotation: `${((index * 137) % 720) * 0.35}deg`,
    delay: `${(index % 12) * 55}ms`,
    duration: `${3200 + ((index * 73) % 1800)}ms`,
    width: `${6 + (index % 4) * 2}px`,
    height: `${10 + (index % 5) * 3}px`,
    borderRadius: index % 5 === 0 ? '50%' : '1px',
    color: confettiColors[index % confettiColors.length],
  };
});

export default function PageConfetti() {
  const { pathname } = useLocation();
  const [burstId, setBurstId] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(true);
    const timeout = window.setTimeout(() => setEnabled(false), 5900);
    setBurstId(id => id + 1);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (!enabled) return null;

  return (
    <div className="page-confetti-layer" aria-hidden="true">
      {confettiPieces.map(piece => (
        <span
          key={`${burstId}-${piece.id}`}
          className="page-confetti-piece"
          style={{
            left: `${piece.originX}%`,
            top: '38px',
            width: piece.width,
            height: piece.height,
            borderRadius: piece.borderRadius,
            backgroundColor: piece.color,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            '--confetti-x': piece.x,
            '--confetti-mid-x': piece.midX,
            '--confetti-mid-y': piece.midY,
            '--confetti-y': piece.y,
            '--confetti-mid-rotation': piece.midRotation,
            '--confetti-rotation': piece.rotation,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
