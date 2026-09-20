import { Driver, IDriver } from "../models/Driver.model";

export class DriverService {
  async listAvailableDrivers(): Promise<IDriver[]> {
    return Driver.find({ isAvailable: true }).populate("userId", "name email phone");
  }

  async updateLocation(driverId: string, lat: number, lng: number) {
    return Driver.findByIdAndUpdate(driverId, {
      currentLocation: { lat, lng }
    }, { new: true });
  }

  async setAvailability(driverId: string, isAvailable: boolean) {
    return Driver.findByIdAndUpdate(driverId, { isAvailable }, { new: true });
  }
}

export const driverService = new DriverService();
