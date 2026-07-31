export const PLANS = {
  FREE: "FREE",

  PRO: "PRO",

  PREMIUM: "PREMIUM",
} as const;

export type Plan =
  (typeof PLANS)[keyof typeof PLANS];