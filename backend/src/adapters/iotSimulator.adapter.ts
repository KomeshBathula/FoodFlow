import { SensorReading, ISensorReading } from "../models/SensorReading.model";

export class IotSimulatorAdapter {
  async generateReading(kitchenId: string, tempCelsius?: number): Promise<ISensorReading> {
    const temp = tempCelsius !== undefined ? tempCelsius : parseFloat((3.5 + Math.random() * 2).toFixed(1));
    return SensorReading.create({
      deviceId: "ESP32-COLDCHAIN-01",
      sensorType: "TEMPERATURE",
      value: temp,
      unit: "°C",
      kitchenId,
      isSimulated: true,
      timestamp: new Date()
    });
  }

  async getLatestReadings(kitchenId: string, limit = 10) {
    return SensorReading.find({ kitchenId }).sort({ timestamp: -1 }).limit(limit);
  }
}

export const iotSimulatorAdapter = new IotSimulatorAdapter();
