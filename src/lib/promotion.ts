// New seven-day campaign starts on 2026-11-22 at 15:01:06 EET.
export const PROMOTION_DISCOUNT_PERCENT = 10;
export const PROMOTION_ENDS_AT = new Date('2026-11-29T15:01:06+02:00').getTime();

export function getPromotionRemainingMs(now = Date.now()) {
  return Math.max(0, PROMOTION_ENDS_AT - now);
}

export function getDiscountedPrice(price: number) {
  return Math.round(price * (100 - PROMOTION_DISCOUNT_PERCENT) / 100);
}

export function getDiscountedPriceFromLabel(priceLabel: string): string | null {
  const match = /€\s*(\d+(?:\.\d+)?)/.exec(priceLabel);
  if (!match || match.index === undefined) return null;

  const originalPrice = Number(match[1]);
  if (!Number.isFinite(originalPrice)) return null;

  const discountedPrice = getDiscountedPrice(originalPrice);
  return `${priceLabel.slice(0, match.index)}€${discountedPrice}${priceLabel.slice(match.index + match[0].length)}`;
}
