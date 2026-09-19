export enum RedistributionStatus {
  REQUESTED = "REQUESTED",
  NGO_ACCEPTED = "NGO_ACCEPTED",
  DRIVER_ASSIGNED = "DRIVER_ASSIGNED",
  PICKUP_IN_PROGRESS = "PICKUP_IN_PROGRESS",
  PICKED_UP = "PICKED_UP",
  IN_TRANSIT = "IN_TRANSIT",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  EXPIRED = "EXPIRED"
}

export interface RedistributionRequestDTO {
  id?: string;
  requestId: string;
  foodBatchId: string;
  foodName: string;
  quantityKg: number;
  kitchenId: string;
  ngoId: string;
  driverId?: string;
  status: RedistributionStatus;
  pickupDeadline: string;
  estimatedDistanceKm: number;
  estimatedBeneficiaries: number;
  rejectionReason?: string;
  createdAt: string;
}
