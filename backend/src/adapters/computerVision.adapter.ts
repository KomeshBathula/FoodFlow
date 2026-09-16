export interface VisionAnalysisResult {
  hasVisualDefect: boolean;
  packagingIntegrityScore: number;
  colorConsistencyScore: number;
  detectedLabels: string[];
  disclaimer: string;
}

export class ComputerVisionAdapter {
  async analyzeFoodImage(imageIdentifier: string): Promise<VisionAnalysisResult> {
    // Deterministic mock image classifier
    const isMockCompromised = imageIdentifier.toLowerCase().includes("damaged") || imageIdentifier.toLowerCase().includes("expired");

    return {
      hasVisualDefect: isMockCompromised,
      packagingIntegrityScore: isMockCompromised ? 45 : 98,
      colorConsistencyScore: isMockCompromised ? 52 : 94,
      detectedLabels: isMockCompromised ? ["packaging_tear", "discoloration"] : ["sealed_container", "fresh_appearance"],
      disclaimer: "Prototype CV inspection only. Not certified lab bacteriological test."
    };
  }
}

export const computerVisionAdapter = new ComputerVisionAdapter();
