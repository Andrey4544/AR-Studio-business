import { useLocation } from 'react-router-dom';
import type { CSSProperties } from 'react';

const confettiColors = ['#ff1744', '#e11d48', '#f43f5e', '#ef4444', '#fecdd3', '#fbbf24'];
const confettiPieces = Array.from({ length: 96 }, (_, index) => {
  const emitter = index % 6;
  const drift = ((Math.floor(index / 6) % 5) - 2) * 4.5;
  const destinationY = 24 + ((index * 47) % 72);
  return {
    id: index,
    originX: 8 + emitter * 16.8,
    x: `${drift}vw`,
    y: `${destinationY}vh`,
    rotation: `${(index * 137) % 720}deg`,
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

  return (
    <div key={pathname} className="page-confetti-layer" aria-hidden="true">
      {confettiPieces.map(piece => (
        <span
          key={piece.id}
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
            '--confetti-y': piece.y,
            '--confetti-rotation': piece.rotation,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
