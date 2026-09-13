export function getHoursRemaining(expiryTime: string | Date): number {
  const exp = new Date(expiryTime).getTime();
  const now = Date.now();
  const diffHours = (exp - now) / (1000 * 60 * 60);
  return Math.max(0, parseFloat(diffHours.toFixed(1)));
}

export function getUrgencyLevel(hoursRemaining: number): "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" {
  if (hoursRemaining <= 2) return "CRITICAL";
  if (hoursRemaining <= 4) return "HIGH";
  if (hoursRemaining <= 8) return "MEDIUM";
  return "LOW";
}
