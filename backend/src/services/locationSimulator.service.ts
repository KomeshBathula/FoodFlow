import { realtimeService } from "./realtime.service";

export class LocationSimulatorService {
  async simulateTripStep(taskId: string, driverId: string, stepIndex: number, totalSteps = 10) {
    const start = { lat: 12.9716, lng: 77.5946 }; // Kitchen
    const end = { lat: 12.9352, lng: 77.6245 }; // NGO

    const ratio = Math.min(1.0, stepIndex / totalSteps);
    const currentLat = start.lat + (end.lat - start.lat) * ratio;
    const currentLng = start.lng + (end.lng - start.lng) * ratio;

    return realtimeService.recordPosition({
      taskId,
      driverId,
      latitude: parseFloat(currentLat.toFixed(5)),
      longitude: parseFloat(currentLng.toFixed(5)),
      speedKmh: 30
    });
  }
}

export const locationSimulatorService = new LocationSimulatorService();
