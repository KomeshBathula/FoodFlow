export interface QualityAssessmentDTO {
  batchId: string;
  qualityScore: number; // 0 to 100
  classification: "EXCELLENT" | "GOOD" | "ACCEPTABLE" | "DEGRADED" | "UNSAFE";
  reasons: string[];
  visionScore?: number;
  sensorScore?: number;
  isEligibleForRedistribution: boolean;
  timestamp: string;
}
