import { getHoursRemaining, getUrgencyLevel } from "../../../shared/utils/dateHelpers";

export function evaluateBatchUrgency(expiryTime: Date) {
  const remaining = getHoursRemaining(expiryTime);
  const urgency = getUrgencyLevel(remaining);
  return {
    hoursRemaining: remaining,
    urgencyLevel: urgency,
    requiresImmediateRedistribution: remaining <= 4
  };
}
