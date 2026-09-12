export enum FoodCategory {
  COOKED_MEALS = "COOKED_MEALS",
  BAKERY = "BAKERY",
  DAIRY = "DAIRY",
  FRUITS_VEGETABLES = "FRUITS_VEGETABLES",
  PACKAGED_GOODS = "PACKAGED_GOODS"
}

export enum FoodBatchStatus {
  CREATED = "CREATED",
  ACTIVE = "ACTIVE",
  SURPLUS_DETECTED = "SURPLUS_DETECTED",
  AVAILABLE = "AVAILABLE",
  MATCHED = "MATCHED",
  PICKUP_ASSIGNED = "PICKUP_ASSIGNED",
  PICKED_UP = "PICKED_UP",
  DELIVERED = "DELIVERED",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED"
}

export interface FoodBatchDTO {
  id?: string;
  batchId: string;
  foodName: string;
  category: FoodCategory;
  quantityKg: number;
  preparationTime: string;
  expiryTime: string;
  storageTemperature: number;
  qualityScore: number;
  status: FoodBatchStatus;
  estimatedBeneficiaries: number;
}
