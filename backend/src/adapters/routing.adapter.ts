import { haversineDistance } from "../utils/haversine";

export interface RouteResult {
  distanceKm: number;
  durationMinutes: number;
  polylineWaypoints: Array<{ lat: number; lng: number }>;
  isSimulatedRoute: boolean;
}

export class RoutingAdapter {
  calculateRoute(
    origin: { lat: number; lng: number },
    destination: { lat: number; lng: number }
  ): RouteResult {
    const dist = haversineDistance(origin, destination);
    // Average urban speed ~25 km/h
    const duration = Math.round((dist / 25) * 60) + 5;

    // Generate interpolated waypoints for demo map representation
    const steps = 6;
    const waypoints: Array<{ lat: number; lng: number }> = [];
    for (let i = 0; i <= steps; i++) {
      const frac = i / steps;
      waypoints.push({
        lat: parseFloat((origin.lat + (destination.lat - origin.lat) * frac).toFixed(5)),
        lng: parseFloat((origin.lng + (destination.lng - origin.lng) * frac).toFixed(5))
      });
    }

    return {
      distanceKm: dist,
      durationMinutes: duration,
      polylineWaypoints: waypoints,
      isSimulatedRoute: true
    };
  }
}

export const routingAdapter = new RoutingAdapter();
