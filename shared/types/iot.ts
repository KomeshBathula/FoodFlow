export interface SensorReadingDTO {
  deviceId: string;
  sensorType: "TEMPERATURE" | "HUMIDITY" | "DOOR_OPEN";
  value: number;
  unit: string;
  timestamp: string;
  kitchenId: string;
  batchId?: string;
  isSimulated: boolean;
}
