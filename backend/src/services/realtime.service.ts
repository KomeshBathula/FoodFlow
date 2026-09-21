import { TrackingEvent, ITrackingEvent } from "../models/TrackingEvent.model";

export class RealtimeService {
  async recordPosition(data: {
    taskId: string;
    driverId: string;
    latitude: number;
    longitude: number;
    speedKmh?: number;
  }): Promise<ITrackingEvent> {
    return TrackingEvent.create({
      ...data,
      timestamp: new Date()
    });
  }

  async getLatestPosition(taskId: string) {
    return TrackingEvent.findOne({ taskId }).sort({ timestamp: -1 });
  }

  async getTaskRouteHistory(taskId: string) {
    return TrackingEvent.find({ taskId }).sort({ timestamp: 1 });
  }
}

export const realtimeService = new RealtimeService();
