import { calculateHaversineDistanceKm } from "../../utils/geo";

export interface NgoMatchCandidate {
  ngoId: string;
  name: string;
  distanceKm: number;
  compatibilityScore: number; // 0 to 100
  factors: {
    distanceFactor: number;
    capacityFactor: number;
    categoryMatch: boolean;
  };
  beneficiaryCount: number;
}

export class NgoMatchingService {
  findMatches(params: {
    batchLocation: { lat: number; lng: number };
    category: string;
    quantityKg: number;
    availableNgos: Array<{
      id: string;
      name: string;
      lat: number;
      lng: number;
      acceptedCategories: string[];
      beneficiaryCount: number;
    }>;
  }): NgoMatchCandidate[] {
    const candidates = params.availableNgos.map((ngo) => {
      const distance = calculateHaversineDistanceKm(
        params.batchLocation.lat,
        params.batchLocation.lng,
        ngo.lat,
        ngo.lng
      );

      // Distance score (closer is better, max 50 points)
      const distScore = Math.max(0, 50 - distance * 3);

      // Capacity factor (can handle people, max 30 points)
      const peopleNeeded = params.quantityKg * 2.5;
      const capacityScore = Math.min(30, (ngo.beneficiaryCount / peopleNeeded) * 20);

      // Category match (20 points)
      const categoryMatch = ngo.acceptedCategories.includes(params.category);
      const catScore = categoryMatch ? 20 : 0;

      const totalScore = Math.min(100, Math.round(distScore + capacityScore + catScore));

      return {
        ngoId: ngo.id,
        name: ngo.name,
        distanceKm: distance,
        compatibilityScore: totalScore,
        factors: {
          distanceFactor: Math.round(distScore),
          capacityFactor: Math.round(capacityScore),
          categoryMatch
        },
        beneficiaryCount: ngo.beneficiaryCount
      };
    });

    return candidates.sort((a, b) => b.compatibilityScore - a.compatibilityScore);
  }
}

export const ngoMatchingService = new NgoMatchingService();
