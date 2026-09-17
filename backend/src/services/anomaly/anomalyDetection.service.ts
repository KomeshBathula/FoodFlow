import { AnomalyEvent, IAnomalyEvent } from "../../models/AnomalyEvent.model";

export class AnomalyDetectionService {
  async checkTemperature(kitchenId: string, currentTempCelsius: number): Promise<IAnomalyEvent | null> {
    if (currentTempCelsius > 8.0) {
      return AnomalyEvent.create({
        anomalyType: "TEMPERATURE_SPIKE",
        severity: currentTempCelsius > 12.0 ? "CRITICAL" : "HIGH",
        entityId: kitchenId,
        entityType: "KitchenColdStorage",
        reason: `Cold chain failure detected: Storage temperature reached ${currentTempCelsius}°C (threshold <= 4.0°C)`,
        recommendedAction: "Inspect chiller immediately and isolate perishable batches for priority redistribution",
        status: "ACTIVE"
      });
    }
    return null;
  }

  async listAnomalies(status = "ACTIVE") {
    return AnomalyEvent.find({ status }).sort({ detectedAt: -1 });
  }
}

export const anomalyDetectionService = new AnomalyDetectionService();
