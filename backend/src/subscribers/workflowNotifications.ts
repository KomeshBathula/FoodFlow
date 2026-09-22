import { notificationService } from "../services/notification.service";

export async function notifySurplusDetected(kitchenId: string, foodName: string, quantityKg: number) {
  return notificationService.send({
    recipientId: kitchenId,
    recipientRole: "KITCHEN",
    type: "SURPLUS_ALERT",
    title: "Surplus Food Detected",
    message: `Batch '${foodName}' has an estimated surplus of ${quantityKg} kg ready for donation.`
  });
}

export async function notifyNgoOfferAvailable(ngoId: string, foodName: string, kitchenName: string) {
  return notificationService.send({
    recipientId: ngoId,
    recipientRole: "NGO",
    type: "MATCH_FOUND",
    title: "New Surplus Food Offer",
    message: `${kitchenName} offered food: '${foodName}'. Click to accept offer.`
  });
}

export async function notifyDriverAssigned(driverId: string, taskId: string) {
  return notificationService.send({
    recipientId: driverId,
    recipientRole: "DRIVER",
    type: "PICKUP_ASSIGNED",
    title: "New Delivery Assigned",
    message: `You have been assigned pickup task #${taskId}. Please proceed to kitchen.`,
    relatedEntityId: taskId
  });
}
