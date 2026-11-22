import { useEffect, useState } from 'react';
import { getPromotionRemainingMs } from '../lib/promotion';

export function usePromotionStatus() {
  const [remainingMs, setRemainingMs] = useState(getPromotionRemainingMs);

  useEffect(() => {
    if (remainingMs <= 0) return;

    const interval = window.setInterval(() => {
      setRemainingMs(getPromotionRemainingMs());
    }, 1000);

    return () => window.clearInterval(interval);
  }, [remainingMs > 0]);

  return {
    isActive: remainingMs > 0,
    remainingMs,
  };
}
