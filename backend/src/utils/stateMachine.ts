export const ALLOWED_TRANSITIONS: Record<string, string[]> = {
  CREATED: ["ACTIVE", "SURPLUS_DETECTED", "CANCELLED"],
  ACTIVE: ["SURPLUS_DETECTED", "EXPIRED", "CANCELLED"],
  SURPLUS_DETECTED: ["AVAILABLE", "EXPIRED", "CANCELLED"],
  AVAILABLE: ["MATCHED", "EXPIRED", "CANCELLED"],
  MATCHED: ["PICKUP_ASSIGNED", "AVAILABLE", "CANCELLED"],
  PICKUP_ASSIGNED: ["PICKED_UP", "MATCHED", "CANCELLED"],
  PICKED_UP: ["DELIVERED", "CANCELLED"],
  DELIVERED: [],
  EXPIRED: [],
  CANCELLED: []
};

export function isValidTransition(fromState: string, toState: string): boolean {
  const allowed = ALLOWED_TRANSITIONS[fromState];
  if (!allowed) return false;
  return allowed.includes(toState);
}
