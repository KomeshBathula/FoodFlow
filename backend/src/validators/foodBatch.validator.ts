import { z } from "zod";

export const createFoodBatchSchema = z.object({
  foodName: z.string().min(2),
  category: z.enum(["COOKED_MEALS", "BAKERY", "DAIRY", "FRUITS_VEGETABLES", "PACKAGED_GOODS"]),
  quantityKg: z.number().positive(),
  preparationTime: z.string().datetime(),
  expiryTime: z.string().datetime(),
  storageCondition: z.enum(["AMBIENT", "REFRIGERATED", "FROZEN"]).default("REFRIGERATED"),
  storageTemperature: z.number(),
  estimatedBeneficiaries: z.number().optional()
});

export const updateFoodBatchStatusSchema = z.object({
  status: z.enum([
    "CREATED",
    "ACTIVE",
    "SURPLUS_DETECTED",
    "AVAILABLE",
    "MATCHED",
    "PICKUP_ASSIGNED",
    "PICKED_UP",
    "DELIVERED",
    "EXPIRED",
    "CANCELLED"
  ])
});
