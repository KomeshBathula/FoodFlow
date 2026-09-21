export interface TrackingEventDTO {
  taskId: string;
  driverId: string;
  latitude: number;
  longitude: number;
  speedKmh: number;
  batteryPercentage: number;
  timestamp: string;
}
