import { QualityAssessmentDTO } from "../../../../shared/types/quality";

export class QualityScoringService {
  evaluateQuality(params: {
    batchId: string;
    storageTemperature: number;
    hoursSincePrep: number;
    hoursUntilExpiry: number;
    visualDefects?: boolean;
  }): QualityAssessmentDTO {
    let score = 100;
    const reasons: string[] = [];

    // Storage Temperature Penalty
    if (params.storageTemperature > 10) {
      score -= 30;
      reasons.push(`High storage temperature (${params.storageTemperature}°C) exceeds safe 4°C limit`);
    } else if (params.storageTemperature > 5) {
      score -= 10;
      reasons.push(`Storage temperature (${params.storageTemperature}°C) slightly elevated`);
    }

    // Expiry Penalty
    if (params.hoursUntilExpiry < 2) {
      score -= 25;
      reasons.push("Expiry window < 2 hours requires urgent redistribution");
    } else if (params.hoursUntilExpiry < 4) {
      score -= 10;
      reasons.push("Expiry window < 4 hours");
    }

    // Visual defect penalty
    if (params.visualDefects) {
      score -= 35;
      reasons.push("Computer Vision detected possible discoloration or packaging breach");
    }

    score = Math.max(0, Math.min(100, score));

    let classification: "EXCELLENT" | "GOOD" | "ACCEPTABLE" | "DEGRADED" | "UNSAFE" = "EXCELLENT";
    if (score >= 90) classification = "EXCELLENT";
    else if (score >= 75) classification = "GOOD";
    else if (score >= 60) classification = "ACCEPTABLE";
    else if (score >= 40) classification = "DEGRADED";
    else classification = "UNSAFE";

    return {
      batchId: params.batchId,
      qualityScore: score,
      classification,
      reasons: reasons.length > 0 ? reasons : ["Parameters within optimal safety envelope"],
      isEligibleForRedistribution: score >= 60,
      timestamp: new Date().toISOString()
    };
  }
}

export const qualityScoringService = new QualityScoringService();
